// قاعدة بيانات وهمية
const serviceData = {
  Lawyer: {
    title: "Find a Lawyer Near You",
    details: "A trusted lawyer in your area offering legal consultations.",
    image: "lawyer.jpg",
    category: "Legal"
  },
  Electrician: {
    title: "Find an Electrician Near You",
    details: "Certified electrician for home and industrial repairs.",
    image: "electrician.jpg",
    category: "Home"
  },
  Doctor: {
    title: "Find a Doctor Near You",
    details: "Experienced doctor providing quality healthcare.",
    image: "doctor.jpg",
    category: "Medical"
  },
  Plumber: {
    title: "Find a Plumber Near You",
    details: "Skilled plumber available for emergency services.",
    image: "plumber.jpg",
    category: "Home"
  }
};

document.getElementById('searchButton').addEventListener('click', function () {
  const selectedService = document.getElementById('service').value;
  const selectedCategory = document.getElementById('category').value;

  const service = serviceData[selectedService];

  if (selectedService && service) {
    if (selectedCategory === "" || selectedCategory === service.category) {
      document.getElementById('results').innerHTML = `<p class="loader">Loading...</p>`;
      setTimeout(() => {
        displayResult(service.title, service.details, service.image);
      }, 500);
    } else {
      document.getElementById('results').innerHTML = `<p class="loader">No results match the selected category.</p>`;
    }
  } else {
    alert("Please select a service.");
  }
});

function displayResult(title, details, imageSrc) {
  const cardHTML = `
    <div class="card">
      <img src="${imageSrc}" alt="Service Image">
      <h3>${title}</h3>
      <p>${details}</p>
    </div>
 `;
  document.getElementById('results').innerHTML = cardHTML;
}
