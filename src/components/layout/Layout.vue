<script setup>
import { InvoiceTemplate, Button, Logo } from "../index";
</script>

<template>
  <header class="flex align-center justify-between px-8 py-4">
    <Logo />
    <Button label="Get Pdf" />
  </header>
  <main>
    <InvoiceTemplate />
  </main>
  <footer></footer>
</template>
