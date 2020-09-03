<template>
  <div class="container">113</div>
</template>

<script lang="ts">
import { Component, Vue, namespace } from 'nuxt-property-decorator';

const sampleModule = namespace('modules/sample');

@Component
export default class App extends Vue {
  @sampleModule.State('testState')
  public info: string | unknown;

  mounted(): void {
    console.log(this.info);
  }
}
</script>
