document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('header');
  var menuItems = document.querySelectorAll('.navigation a');

  // Function to change header style on scroll
  function handleScroll() {
    if (window.scrollY > 0) {
      header.style.backgroundColor = '#fff'; // Change to your desired background color
      header.style.color = '#000'; // Change to your desired font color
    } else {
      header.style.backgroundColor = 'transparent'; // Reset background color
      header.style.color = '#000'; // Reset font color
    }
  }

  window.addEventListener('scroll', handleScroll);

  // Function to change menu item style on hover
  function handleMenuItemHover(event) {
    var menuItem = event.target;

    menuItem.addEventListener('mouseenter', function () {
      menuItem.style.backgroundColor = '#0C4F60'; // Change to your desired hover background color
      menuItem.style.color = '#fff'; // Change to your desired hover font color
    });

    menuItem.addEventListener('mouseleave', function () {
      menuItem.style.backgroundColor = 'transparent'; // Reset hover background color
      menuItem.style.color = '#000'; // Reset hover font color
    });
  }

  menuItems.forEach(handleMenuItemHover);
});
