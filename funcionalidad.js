const definitions = document.querySelectorAll('.definition');
definitions.forEach((definition) => {
  let tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  tooltip.textContent = definition.dataset.definition;
  definition.addEventListener('mouseover', () => {
    definition.appendChild(tooltip);
  });
  definition.addEventListener('mouseout', () => {
    definition.removeChild(tooltip);
  });
});