document.addEventListener("DOMContentLoaded", () => {
  // نمایش وضعیت اولیه
  const status = document.getElementById("connection-status");

  if (status) {
    status.textContent = "آماده";
  }

  // دکمه‌های کپی
  document.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      const text = button.dataset.copy || "";

      try {
        await navigator.clipboard.writeText(text);

        const originalText = button.textContent;
        button.textContent = "کپی شد!";

        setTimeout(() => {
          button.textContent = originalText;
        }, 2000);
      } catch (error) {
        console.error("کپی انجام نشد:", error);
        button.textContent = "کپی ناموفق";
      }
    });
  });

  // منوی موبایل
  const menuButton = document.getElementById("menuBtn");
  const menu = document.querySelector(".sidebar");

  if (menuButton && menu) {
    menuButton.addEventListener("click", () => {
      const isExpanded =
        menuButton.getAttribute("aria-expanded") === "true";

      menuButton.setAttribute("aria-expanded", String(!isExpanded));
      const isOpen = menu.classList.toggle("open");
menuButton.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // نمایش تاریخ
  document.querySelectorAll("[data-current-date]").forEach((element) => {
    element.textContent = new Intl.DateTimeFormat("fa-IR", {
      dateStyle: "long"
    }).format(new Date());
  });
});
