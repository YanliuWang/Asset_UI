<template>
	<div>
		<el-menu
			:default-active="$store.state.navActivePath"
			class="el-menu-vertical-demo"
			@select="handleSelect"
			background-color="#282c34"
			text-color="#fff"
			active-text-color="#fff"
			:unique-opened="true"
			:collapse="$store.state.navZoomVal"
			style="height: 100%;"
		>
			<div style="width: 100%;height: 100px;padding-top: 37px;color: #fff;padding-left: 12px;box-sizing: border-box;overflow: hidden;">
				<span slot="title" 
				      style="font-size: 25px !important;
					  font-weight: bold !important; 
					  display: inline-block;
					  " v-if="!$store.state.navZoomVal">
					AssetIt
				</span>
			</div>
			<template v-for="(item, index) in $router.options.routes">
					<el-menu-item-group :index="item.redirect" :key="index" v-if="item.hidden === false && item.children.length > 1">
						<el-menu-item :index="items.path" v-for="(items, indexs) in item.children" :key="indexs">{{ items.meta.title }}</el-menu-item>
					</el-menu-item-group>
			</template>
		</el-menu>
	</div>
</template>

<script>
export default {
	components: {},
	data() {
		return {
			routerUrl: ''
		};
	},
	computed: {

	},
	mounted() {
		this.$store.commit('navActivePathFun',this.$route.path)
	},
	methods: {
		//点击导航触发的方法
		handleSelect(key) {
			if (key != this.$route.path) {
				this.$router.push({ path: key });
				this.$store.commit('navActivePathFun',key)
			}
		}
	}
};
</script>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 256px;
  }
  .is-active {
	  background-color: #1890ff!important;
  }
</style>
