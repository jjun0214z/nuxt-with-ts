import { Module, VuexModule, Mutation } from 'vuex-module-decorators';

export interface ISample {
  testState: string;
}

@Module({
  name: 'sample',
  namespaced: true,
  stateFactory: true,
})
export default class SampleModule extends VuexModule implements ISample {
  public testState = '';

  @Mutation
  public setTestState(value: string): void {
    this.testState = value;
  }
}
