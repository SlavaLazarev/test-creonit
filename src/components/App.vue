<template>
  <main>
    <section class="container mb-5">
      <SubmitForm/>
    </section>
    <section class="container mb-5">
      <Card/>
    </section>
  </main>
</template>

<script>

import "bootstrap/dist/css/bootstrap.min.css";
import SubmitForm from "@/components/SubmitForm";
import Card from "@/components/Card";
export default {
  components: {SubmitForm, Card}
}

</script>

