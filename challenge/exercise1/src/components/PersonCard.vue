<template>
  <div>
    <div class="details" @click="$emit('personClick', person)">
      <h4> {{ person.name }} </h4>
      <span><b>Age:</b> {{ person.age }}</span>
      <span><b>Eye Color:</b> {{ person.eyeColour }}</span>
      <span><b>Gender:</b> {{ person.gender }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PersonCard',
    emits: ['personClick'],
    props: {
      person: {
        type: Object,
        default: () => {},
      },
    },
  };
</script>

<style scoped>

.details{
  display: flex;
  flex-flow: column;
  padding: 20px;
}

</style>
