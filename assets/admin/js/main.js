function slideToggle(t, e, o) { 0 === t.clientHeight ? j(t, e, o, !0) : j(t, e, o) } function slideUp(t, e, o) { j(t, e, o) } function slideDown(t, e, o) { j(t, e, o, !0) } function j(t, e, o, i) { void 0 === e && (e = 400), void 0 === i && (i = !1), t.style.overflow = "hidden", i && (t.style.display = "block"); var p, l = window.getComputedStyle(t), n = parseFloat(l.getPropertyValue("height")), a = parseFloat(l.getPropertyValue("padding-top")), s = parseFloat(l.getPropertyValue("padding-bottom")), r = parseFloat(l.getPropertyValue("margin-top")), d = parseFloat(l.getPropertyValue("margin-bottom")), g = n / e, y = a / e, m = s / e, u = r / e, h = d / e; window.requestAnimationFrame(function l(x) { void 0 === p && (p = x); var f = x - p; i ? (t.style.height = g * f + "px", t.style.paddingTop = y * f + "px", t.style.paddingBottom = m * f + "px", t.style.marginTop = u * f + "px", t.style.marginBottom = h * f + "px") : (t.style.height = n - g * f + "px", t.style.paddingTop = a - y * f + "px", t.style.paddingBottom = s - m * f + "px", t.style.marginTop = r - u * f + "px", t.style.marginBottom = d - h * f + "px"), f >= e ? (t.style.height = "", t.style.paddingTop = "", t.style.paddingBottom = "", t.style.marginTop = "", t.style.marginBottom = "", t.style.overflow = "", i || (t.style.display = "none"), "function" == typeof o && o()) : window.requestAnimationFrame(l) }) }

let sidebarItems = document.querySelectorAll('.sidebar-item.has-sub');
for (var i = 0; i < sidebarItems.length; i++) {
    let sidebarItem = sidebarItems[i];
    sidebarItems[i].querySelector('.sidebar-link').addEventListener('click', function (e) {
        e.preventDefault();

        let submenu = sidebarItem.querySelector('.submenu');
        if (submenu.classList.contains('active')) submenu.style.display = "block"

        if (submenu.style.display == "none") submenu.classList.add('active')
        else submenu.classList.remove('active')
        slideToggle(submenu, 300)
    })
}

window.addEventListener('DOMContentLoaded', (event) => {
    var w = window.innerWidth;
    if (w < 1200) {
        document.getElementById('sidebar').classList.remove('active');
    }
});
window.addEventListener('resize', (event) => {
    var w = window.innerWidth;
    if (w < 1200) {
        document.getElementById('sidebar').classList.remove('active');
    } else {
        document.getElementById('sidebar').classList.add('active');
    }
});

document.querySelector('.burger-btn').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('active');
})
document.querySelector('.sidebar-hide').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('active');

})


// Perfect Scrollbar Init
if (typeof PerfectScrollbar == 'function') {
    const container = document.querySelector(".sidebar-wrapper");
    const ps = new PerfectScrollbar(container, {
        wheelPropagation: false
    });
}

// Scroll into active sidebar
document.querySelector('.sidebar-item.active').scrollIntoView(false)



//   =============== blog page =====================


document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".submenu a").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            const submenu = link.closest(".submenu");
            const parentItem = link.closest(".sidebar-item");

            parentItem.classList.add("active");
            submenu.classList.add("active");
            submenu.style.display = "block";
        }
    });
});

ClassicEditor.create(document.querySelector("#pooja-desc-editor")).catch(
    (error) => console.error(error)
);

ClassicEditor.create(
    document.querySelector("#pooja-significance-editor")
).catch((error) => console.error(error));

function addFaq() {
    const container = document.getElementById("faq-container");

    const div = document.createElement("div");
    div.className = "faq-row";

    div.innerHTML = `
      <input type="text" name="faq_question[]" placeholder="Enter Question" />
      <input type="text" name="faq_answer[]" placeholder="Enter Answer">
      <button type="button" onclick="removeFaq(this)">✕</button>
    `;

    container.appendChild(div);
}

function removeFaq(btn) {
    const container = document.getElementById("faq-container");
  if (container.children.length <= 1) {
    alert("At least one faq is required");
    return;
  }

  btn.parentElement.remove();
}

function previewImage(input, previewId) {
    const preview = document.getElementById(previewId);
    preview.innerHTML = "";

    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const img = document.createElement("img");
        img.src = e.target.result;
        preview.appendChild(img);
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

function openPoojaDetailModal(data) {
    document.getElementById("pdName").textContent = data.name;
    document.getElementById("pdDescription").textContent = data.description;
    document.getElementById("pdSignificance").textContent = data.significance;

    const faqList = document.getElementById("pdFaq");
    faqList.innerHTML = "";
    data.faq.forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${item.q}</strong><br>${item.a}`;
      faqList.appendChild(li);
    });
    document.getElementById("poojaDetailModal").style.display = "flex";
  }

  function closePoojaDetailModal() {
    document.getElementById("poojaDetailModal").style.display = "none";
  }
  function addImage() {
    const container = document.getElementById("image-container");

    // max 5 images limit
    if (container.children.length >= 5) {
      alert("Maximum 5 images allowed");
      return;
    }

    const div = document.createElement("div");
    div.className = "image-row";

    div.innerHTML = `
      <div class="image-preview">+</div>
      <input
        type="file"
        name="pooja_images[]"
        accept="image/*"
        onchange="previewDynamicImage(this)"
      />
      <button type="button" onclick="removeImage(this)">✕</button>
    `;

    container.appendChild(div);
  }

  function removeImage(btn) {
  const container = document.getElementById("image-container");

  // ❗ At least 1 image row must remain
  if (container.children.length <= 1) {
    alert("At least one image is required");
    return;
  }

  btn.parentElement.remove();
}

  function previewDynamicImage(input) {
    const preview = input.previousElementSibling;

    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        preview.style.backgroundImage = `url(${e.target.result})`;
        preview.textContent = "";
        preview.style.backgroundSize = "cover";
        preview.style.backgroundPosition = "center";
      };
      reader.readAsDataURL(input.files[0]);
    }
  }