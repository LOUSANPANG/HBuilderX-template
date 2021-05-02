```js
// .vue
import { mapState, mapGetters mapMutations } from 'vuex'
computed: {
  ...mapState({
    staTest: state => state.Test.staTest
  }),
	...mapGetters([
			'getTest'
	])
},
methods: {
  ...mapMutations({
    mutTest: 'Test/mutTest'
  })
}
// this.staTest 取值
// this.mutTest('') 设置值
```