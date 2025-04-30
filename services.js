const services = [
    { title: "Caste Certificate", time: "15 days", icon: "fa-id-card", docs: ["Aadhar Card", "Ration Card", "School Leaving Certificate"] },
    { title: "Income Certificate", time: "3 days", icon: "fa-credit-card", docs: ["Aadhar Card", "Income Proof", "Affidavit"] },
    { title: "Aadhar Update", time: "3 days", icon: "fa-address-card", docs: ["Aadhar Card", "Any Govt ID proof"] },
    { title: "7/12 Extract", time: "Instant", icon: "fa-file-alt", docs: ["Property papers", "Owner ID proof"] },
    { title: "PAN Card", time: "5 days", icon: "fa-id-card-clip", docs: ["Aadhar Card", "Photo", "Mobile Number"] },
    { title: "Scholarship Form", time: "7 days", icon: "fa-graduation-cap", docs: ["Marksheet", "Caste Cert.", "Bank Passbook"] },
    { title: "Exam Form Filling", time: "5 days", icon: "fa-pen-to-square", docs: ["Aadhar", "Marksheet", "Photo"] },
    { title: "Sale Deed", time: "1 day", icon: "fa-file-signature", docs: ["Property papers", "PAN", "ID proof"] },
    { title: "Gift Deed", time: "1 day", icon: "fa-gift", docs: ["Gift papers", "ID proofs", "Tax Documents"] },
    { title: "EWS Certificate", time: "7 days", icon: "fa-certificate", docs: ["Income Proof", "Aadhar", "Photo"] },
    { title: "Ration Card", time: "7 days", icon: "fa-people-roof", docs: ["Old Ration Card", "Aadhar", "Address proof"] },
    { title: "Voter ID", time: "5 days", icon: "fa-person-booth", docs: ["Aadhar", "Age Proof", "Address proof"] },
    { title: "Domicile", time: "3 days", icon: "fa-house-user", docs: ["Aadhar", "School Cert.", "Address proof"] },
    { title: "Alpbhudhark Certificate", time: "7 days", icon: "fa-file", docs: ["Govt Form", "Aadhar", "Photo"] },
    { title: "Non Creamy Layer", time: "7 days", icon: "fa-layer-group", docs: ["Caste Cert.", "Income Proof", "Photo"] },
    { title: "Farmer Certificate", time: "5 days", icon: "fa-tractor", docs: ["7/12 Extract", "ID Proof"] },
    { title: "Nationality", time: "3 days", icon: "fa-flag", docs: ["Birth Cert.", "Aadhar", "Passport size photo"] },
    { title: "Online Gazette", time: "15 days", icon: "fa-newspaper", docs: ["Aadhar", "Affidavit", "Gazette form"] },
    { title: "Shop Act License", time: "2 days", icon: "fa-store", docs: ["Shop Proof", "Aadhar", "Photo"] },
    { title: "Agriculture Services", time: "5 days", icon: "fa-seedling", docs: ["Land Records", "Aadhar", "Bank Passbook"] }
  ];
  
  // Nice soft pastel backgrounds
  const cardColors = [
    "#e3f2fd", "#e8f5e9", "#fff3e0", "#fce4ec", "#ede7f6",
    "#f3e5f5", "#e0f7fa", "#f9fbe7", "#e1f5fe", "#fbe9e7"
  ];
  
  const cardsContainer = document.querySelector('.cards-container');
  const modalsContainer = document.getElementById('modals-container');
  
  services.forEach((service, index) => {
    // Card
    const card = document.createElement('div');
    card.className = 'card';
    card.style.backgroundColor = cardColors[index % cardColors.length];
  
    card.innerHTML = `
      <div class="card-icon"><i class="fas ${service.icon}"></i></div>
      <h4>${service.title}</h4>
      <p>Processing: ${service.time}</p>
    `;
  
    card.addEventListener('click', () => {
      document.getElementById(`modal-${index}`).style.display = 'flex';
    });
  
    cardsContainer.appendChild(card);
  
    // Modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = `modal-${index}`;
    modal.innerHTML = `
      <div class="modal-content">
        <span class="modal-close" onclick="document.getElementById('modal-${index}').style.display='none'">&times;</span>
        <h3>${service.title}</h3>
        <ul>${service.docs.map(doc => `<li>${doc}</li>`).join('')}</ul>
      </div>
    `;
    modalsContainer.appendChild(modal);
  });
  