<template>
  <div class="container">
    113
    <input v-useInput="this.testValue" type="text" name="testInput" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, namespace } from 'nuxt-property-decorator';

const sampleModule = namespace('modules/sample');

@Component
export default class App extends Vue {
  @sampleModule.State('testState')
  private testState: string | unknown;

  private testValue: string | unknown = '테스트';

  mounted(): void {
    console.log(this.testState);
  }
}
</script>
