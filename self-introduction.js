document.addEventListener('DOMContentLoaded', () => {
  const tooltipTriggers = document.querySelectorAll('.has-tooltip, .icon-container, .conan-trigger');

  tooltipTriggers.forEach(trigger => {
    const tooltip = trigger.querySelector('.tooltip-right') || trigger.querySelector('.tooltip');
    
    trigger.addEventListener('mouseenter', () => {
      if (tooltip) {
        tooltip.classList.add('is-visible');
      }
      if (trigger.classList.contains('conan-trigger')) {
        trigger.classList.add('conan-active');
      }
    });

    trigger.addEventListener('mouseleave', () => {
      if (tooltip) {
        tooltip.classList.remove('is-visible');
      }
      if (trigger.classList.contains('conan-trigger')) {
        trigger.classList.remove('conan-active');
      }
    });
  });
});