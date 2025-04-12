window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  const scrollPosition = window.scrollY;
  const opacity = Math.min(1, scrollPosition / 200); // 200 скорость затемнения

  header.style.backgroundColor = `rgba(34, 34, 34, ${opacity})`;
});
