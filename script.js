function toggleMobileMenu() {
  const menu = document.querySelector(".menu-links")
  const icon = document.querySelector(".hamburger-icon")
  menu.classList.toggle("open")
  icon.classList.toggle("open")
}


document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll('a[href^="#"]')

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  
  const sections = document.querySelectorAll("section")
  sections.forEach((section) => {
    section.style.opacity = "0"
    section.style.transform = "translateY(30px)"
    section.style.transition = "all 0.6s ease"
    observer.observe(section)
  })


  setTimeout(() => {
    const profileSection = document.querySelector("#profile")
    if (profileSection) {
      profileSection.style.opacity = "1"
      profileSection.style.transform = "translateY(0)"
    }
  }, 100)


  const socialIcons = document.querySelectorAll(".social-icon")

  socialIcons.forEach((icon) => {
    icon.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px) scale(1.1)"
    })

    icon.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })
  })
})


window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const parallax = document.querySelector("body")
  const speed = scrolled * 0.5

  if (parallax) {
    parallax.style.backgroundPosition = `center ${speed}px`
  }
})

// Add typing effect to title
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}

// Initialize typing effect when page loads
window.addEventListener("load", () => {
  const titleElement = document.querySelector("#profile .title")
  if (titleElement) {
    const originalText = titleElement.textContent
    typeWriter(titleElement, originalText, 150)
  }
})
