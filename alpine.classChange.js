Alpine.directive('class-change', (el, {value, modifiers, expression}, {Alpine, evaluateLater, evaluate, effect, cleanup}) => {
    let prev = el.classList.contains(value);

    const handler = (mutationList) => {
      mutationList.forEach(mutation => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const current = mutation.target.classList.contains(value);

          if (prev !== current) {
            prev = current;

            if(modifiers.length) {
              if(modifiers.includes('added') && current) {
                evaluate(expression);
              }
              else if (modifiers.includes('removed') && !current) {
                evaluate(expression);
              }
            }
            else {
              evaluate(expression);
            }
          }
        }
      })
    }

    const observer = new MutationObserver(handler)
    observer.observe(el, {attributes: true})

    cleanup(() => observer.disconnect());
  })
