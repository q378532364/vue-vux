<template>
  <div>

    <div >
      <loading :show="true"
               :text="$t('JavaScript')"></loading>
    </div>

  </div>
</template>


<script>
/* eslint-disable */
import { Loading } from 'vux';
export default {
  components: {
    Loading,
  },
  created () {
    console.log('this', this.$t.toString())
  }


};

</script>
