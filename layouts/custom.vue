<template>
  <div>
    <header>
      <slot name="header">
        Default custom layout header content
      </slot>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>
