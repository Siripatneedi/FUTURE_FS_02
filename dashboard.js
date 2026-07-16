const API = "http://localhost:5000/api/leads";

const leadForm = document.getElementById("leadForm");
const leadTable = document.getElementById("leadTable");

const totalLeads = document.getElementById("totalLeads");
const newLeads = document.getElementById("newLeads");
const contactedLeads = document.getElementById("contactedLeads");
const convertedLeads = document.getElementById("convertedLeads");

const search = document.getElementById("search");

// Load all leads
window.onload = () => {
    getLeads();
};

// -------------------------------
// ADD LEAD
// -------------------------------

leadForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const lead = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        source: document.getElementById("source").value,
        notes: document.getElementById("notes").value,
        status: "New"
    };

    const response = await fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(lead)
    });

    if (response.ok) {
        alert("Lead Added Successfully");
        leadForm.reset();
        getLeads();
    }
});

// -------------------------------
// GET ALL LEADS
// -------------------------------

async function getLeads() {

    const response = await fetch(API);

    const leads = await response.json();

    displayLeads(leads);
    updateCards(leads);
}

// -------------------------------
// DISPLAY TABLE
// -------------------------------

function displayLeads(leads) {

    leadTable.innerHTML = "";

    leads.forEach((lead) => {

        leadTable.innerHTML += `
        <tr>

            <td>${lead.name}</td>

            <td>${lead.email}</td>

            <td>${lead.phone}</td>

            <td>${lead.source}</td>

            <td>${lead.status}</td>

            <td>${lead.notes}</td>

            <td>

                <button class="edit-btn"
                onclick="editLead('${lead._id}')">

                Edit

                </button>

                <button class="delete-btn"
                onclick="deleteLead('${lead._id}')">

                Delete

                </button>

            </td>

        </tr>
        `;
    });

}

// -------------------------------
// DELETE LEAD
// -------------------------------

async function deleteLead(id) {

    const confirmDelete = confirm("Delete this lead?");

    if (!confirmDelete) return;

    await fetch(`${API}/${id}`, {

        method: "DELETE"

    });

    getLeads();

}

// -------------------------------
// EDIT LEAD STATUS
// -------------------------------

async function editLead(id) {

    const status = prompt(
        "Enter Status (New, Contacted, Converted)"
    );

    if (!status) return;

    await fetch(`${API}/${id}`, {

        method: "PUT",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            status: status

        })

    });

    getLeads();

}

// -------------------------------
// UPDATE DASHBOARD CARDS
// -------------------------------

function updateCards(leads) {

    totalLeads.textContent = leads.length;

    newLeads.textContent =
        leads.filter(l => l.status === "New").length;

    contactedLeads.textContent =
        leads.filter(l => l.status === "Contacted").length;

    convertedLeads.textContent =
        leads.filter(l => l.status === "Converted").length;

}

// -------------------------------
// SEARCH LEADS
// -------------------------------

search.addEventListener("keyup", async () => {

    const response = await fetch(API);

    const leads = await response.json();

    const keyword = search.value.toLowerCase();

    const filtered = leads.filter(lead =>
        lead.name.toLowerCase().includes(keyword)
    );

    displayLeads(filtered);

});

// -------------------------------
// LOGOUT
// -------------------------------

document.getElementById("logoutBtn").addEventListener("click", () => {

    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");

    window.location.href = "login.html";

});