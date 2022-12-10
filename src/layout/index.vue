<template>
	<div>
		<div class="app-left" :style="{ width: $store.state.navZoomVal === true ? '64px' : '256px' }"><Sidebar class="Sidebar"></Sidebar></div>
		<div class="app-right" :style="{ width: $store.state.navZoomVal === true ? 'calc(100vw - 64px)' : 'calc(100vw - 256px)' }">
			<Breadcrumb class="Breadcrumb"></Breadcrumb>
			<SidebarItem class="SidebarItem"></SidebarItem>
			<AppMain class="AppMain"></AppMain>
		</div>
	</div>
</template>

<script>
import { Sidebar, Breadcrumb, AppMain, SidebarItem } from './components';
export default {
	name: 'Layout',
	components: {
		Sidebar,
		Breadcrumb,
		AppMain,
		SidebarItem
	},
	methods: {}
};
</script>

<style lang="scss">
html,
body {
	background-color: #fff;
}
.app-left {
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 9999;
}
.app-right {
	height: 100vh;
	position: fixed;
	top: 0;
	right: 0;
	transition: width 0.3s;
	z-index: 999;
	background-color: #f6f8f9;
}
.Sidebar {
	width: 100%;
	height: 100%;
}
.Breadcrumb {
	width: 100%;
	height: 60px;
	line-height: 60px !important;
	padding-left: 30px;
	box-sizing: border-box;
	position: relative;
	background-color: #fff;
}
.Breadcrumb:after {
	content: '';
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 1px;
	background-color: #dcdfe6;
	transform: scaleY(0.5);
}
.SidebarItem {
	width: 100%;
	height: 60px;
	padding-left: 30px;
	box-sizing: border-box;
	position: relative;
	background-color: #fff;
	box-shadow:-5px 5px 5px #eee;
}
.AppMain {
	width: 100%;
	box-sizing: border-box;
	width: calc(100% - 60px);
	margin: 0px auto;
	margin-top: 30px;
	height: calc(100% - 150px);
	box-sizing: border-box;
	padding: 30px;
	background-color: #fff;
	border-radius: 7px;
	box-shadow: 2px 2px 20px 2px #eee;
	overflow-y: auto;
}
.el-menu {
	border: none !important;
}
.el-submenu .el-menu-item {
	min-width: 0 !important;
}
.el-menu-item-group__title {
	padding: 0px !important;
}
</style>
