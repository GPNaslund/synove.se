export default function smoothScroll (id: string, path: string) {
  const checkPath = () => {
    if (window.location.pathname === path) {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setTimeout(checkPath, 100);
    }
  };

  checkPath();
}