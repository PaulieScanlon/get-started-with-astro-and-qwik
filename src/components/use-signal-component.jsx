import { component$, useSignal, $ } from '@builder.io/qwik';

const UseSignalComponent = component$(() => {
  const isVisible = useSignal(true);

  const handleVisibility = $(() => {
    isVisible.value = !isVisible.value;
  });

  return (
    <div>
      <div
        style={{
          height: 48,
        }}
      >
        {isVisible.value ? (
          <span role='img' aria-label='Rocket'>
            🚀
          </span>
        ) : null}
      </div>

      <button onClick$={handleVisibility}>{`${isVisible.value ? 'Hide' : 'Show'} Rocket`}</button>
    </div>
  );
});

export default UseSignalComponent;
