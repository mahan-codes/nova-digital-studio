document.addEventListener("DOMContentLoaded", () => {


  /* =========================
     MOBILE MENU
  ========================== */

  const menuToggle =
    document.querySelector(".menu-toggle");

  const nav =
    document.querySelector(".nav");


  if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {

      const isOpen =
        nav.classList.toggle("open");


      menuToggle.classList.toggle(
        "active",
        isOpen
      );


      menuToggle.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );

    });


    document
      .querySelectorAll(".nav a")
      .forEach((link) => {

        link.addEventListener("click", () => {

          nav.classList.remove("open");

          menuToggle.classList.remove("active");

          menuToggle.setAttribute(
            "aria-expanded",
            "false"
          );

        });

      });

  }



  /* =========================
     SCROLL REVEAL
  ========================== */

  const revealElements =
    document.querySelectorAll(".reveal");


  const revealObserver =
    new IntersectionObserver(
      (entries, observer) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "visible"
            );

            observer.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold: 0.1
      }
    );


  revealElements.forEach((element) => {

    revealObserver.observe(element);

  });



  /* =========================
     SCROLL PROGRESS
  ========================== */

  const scrollProgress =
    document.getElementById(
      "scrollProgress"
    );


  function updateScrollProgress() {

    if (!scrollProgress) return;


    const scrollTop =
      window.scrollY;


    const documentHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;


    const progress =
      documentHeight > 0
        ? (scrollTop / documentHeight) * 100
        : 0;


    scrollProgress.style.width =
      `${progress}%`;

  }


  window.addEventListener(
    "scroll",
    updateScrollProgress,
    {
      passive: true
    }
  );


  updateScrollProgress();



  /* =========================
     BACK TO TOP
  ========================== */

  const backTop =
    document.getElementById(
      "backTop"
    );


  function updateBackTop() {

    if (!backTop) return;


    if (window.scrollY > 500) {

      backTop.classList.add("show");

    } else {

      backTop.classList.remove("show");

    }

  }


  window.addEventListener(
    "scroll",
    updateBackTop,
    {
      passive: true
    }
  );


  updateBackTop();


  if (backTop) {

    backTop.addEventListener(
      "click",
      () => {

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

      }
    );

  }



  /* =========================
     ACTIVE NAV
  ========================== */

  const sections =
    document.querySelectorAll(
      "main section[id]"
    );


  const navLinks =
    document.querySelectorAll(
      ".nav a"
    );


  const sectionObserver =
    new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) {
            return;
          }


          const currentId =
            entry.target.getAttribute(
              "id"
            );


          navLinks.forEach((link) => {

            link.classList.remove(
              "active"
            );


            if (
              link.getAttribute("href") ===
              `#${currentId}`
            ) {

              link.classList.add(
                "active"
              );

            }

          });

        });

      },
      {
        rootMargin:
          "-35% 0px -55% 0px"
      }
    );


  sections.forEach((section) => {

    sectionObserver.observe(section);

  });



  /* =========================
     PROJECT MODAL
  ========================== */

  const projectModal =
    document.getElementById(
      "projectModal"
    );


  const modalClose =
    document.getElementById(
      "modalClose"
    );


  const modalTitle =
    document.getElementById(
      "modalTitle"
    );


  const modalCategory =
    document.getElementById(
      "modalCategory"
    );


  const modalDescription =
    document.getElementById(
      "modalDescription"
    );


  const modalTags =
    document.getElementById(
      "modalTags"
    );


  const modalNumber =
    document.getElementById(
      "modalNumber"
    );


  const projectData = {

    atlas: {

      number: "۰۱",

      title: "ATLAS",

      category:
        "برند / فروشگاه اینترنتی",

      description:
        "یک تجربه مفهومی برای فروشگاه اینترنتی مدرن؛ با تمرکز روی معرفی محصول، ساختار ساده، تجربه کاربری روان و نمایش حرفه‌ای محصولات.",

      tags: [
        "UI Design",
        "Responsive",
        "E-Commerce"
      ]

    },


    orbit: {

      number: "۰۲",

      title: "ORBIT",

      category:
        "فناوری / نرم‌افزار",

      description:
        "یک وب‌سایت مفهومی برای یک محصول نرم‌افزاری؛ با تمرکز روی معرفی سرویس، نمایش امکانات و ایجاد یک تجربه دیجیتال ساده و مدرن.",

      tags: [
        "Web Design",
        "Landing Page",
        "Modern UI"
      ]

    },


    mono: {

      number: "۰۳",

      title: "MONO",

      category:
        "هتلداری / برند",

      description:
        "یک تجربه مفهومی برای برند هتلداری مدرن؛ با فضای مینیمال، تایپوگرافی قدرتمند و تمرکز روی تصویر برند و تجربه کاربر.",

      tags: [
        "Brand Website",
        "Luxury",
        "Responsive"
      ]

    }

  };



  function openProject(projectId) {

    const project =
      projectData[projectId];


    if (
      !project ||
      !projectModal
    ) {
      return;
    }


    modalTitle.textContent =
      project.title;


    modalCategory.textContent =
      project.category;


    modalDescription.textContent =
      project.description;


    modalNumber.textContent =
      project.number;


    modalTags.innerHTML =
      "";


    project.tags.forEach((tag) => {

      const tagElement =
        document.createElement(
          "span"
        );


      tagElement.textContent =
        tag;


      modalTags.appendChild(
        tagElement
      );

    });


    projectModal.classList.add(
      "show"
    );


    projectModal.setAttribute(
      "aria-hidden",
      "false"
    );


    document.body.classList.add(
      "modal-open"
    );

  }



  function closeProject() {

    if (!projectModal) {
      return;
    }


    projectModal.classList.remove(
      "show"
    );


    projectModal.setAttribute(
      "aria-hidden",
      "true"
    );


    document.body.classList.remove(
      "modal-open"
    );

  }



  document
    .querySelectorAll(".project")
    .forEach((project) => {


      project.addEventListener(
        "click",
        () => {

          const projectId =
            project.dataset.project;


          openProject(
            projectId
          );

        }
      );


      project.addEventListener(
        "keydown",
        (event) => {

          if (
            event.key === "Enter" ||
            event.key === " "
          ) {

            event.preventDefault();


            const projectId =
              project.dataset.project;


            openProject(
              projectId
            );

          }

        }
      );

    });



  if (modalClose) {

    modalClose.addEventListener(
      "click",
      closeProject
    );

  }


  const modalOverlay =
    document.querySelector(
      ".modal-overlay"
    );


  if (modalOverlay) {

    modalOverlay.addEventListener(
      "click",
      closeProject
    );

  }


  document.addEventListener(
    "keydown",
    (event) => {

      if (event.key === "Escape") {

        closeProject();

      }

    }
  );



  /* =========================
     CONTACT FORM
  ========================== */

  const contactForm =
    document.getElementById(
      "contactForm"
    );


  if (contactForm) {

    contactForm.addEventListener(
      "submit",
      (event) => {

        event.preventDefault();


        const name =
          document
            .getElementById("name")
            .value
            .trim();


        const email =
          document
            .getElementById("email")
            .value
            .trim();


        const message =
          document
            .getElementById("message")
            .value
            .trim();


        if (
          !name ||
          !email ||
          !message
        ) {

          alert(
            "لطفاً همه فیلدها را کامل کنید."
          );

          return;

        }


        /* ایمیل مقصد را بعداً عوض می‌کنیم */

        const receiver =
          "hello@nova-studio.example";


        const subject =
          encodeURIComponent(
            `درخواست پروژه جدید از ${name}`
          );


        const body =
          encodeURIComponent(
            `نام: ${name}

ایمیل: ${email}

توضیحات پروژه:
${message}`
          );


        window.location.href =
          `mailto:${receiver}?subject=${subject}&body=${body}`;

      }
    );

  }

});
