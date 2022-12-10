<template>
	<div id="SidebarItem">
		<section style="display: flex;width: 100%;overflow: hidden;height: 100%;">
			<div class="label">
				<div class="row" v-for="(item, index) in activeNavArr" :key="index" :class="item.path == activeVal ? 'active' : ''" @click="handleSelect(item)">
					{{ item.meta.title }}
					<i class="el-icon-close errors" v-on:click.stop="close(item)" v-if="item.meta.title !== '首页'"></i>
				</div>
			</div>
			<div class="operation">
				<el-dropdown>
					<span class="el-dropdown-link">
						More Operations
						<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item icon="" @click.native="closeAll">Close All Pages</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {
			activeNavArr: [],
			activeVal: ''
		};
	},
	methods: {
		getBreadcrumb() {
			if (this.$route.matched[1].path.indexOf('/HOME') == -1) {
				this.activeNavArr.push(this.$router.options.routes[0].children[0]);
			}
			this.activeNavArr.push(this.$route.matched[1]);
			this.activeNavArr = this.activeNavArr.reduce((all, next) => (all.some(item => item['path'] == next['path']) ? all : [...all, next]), []);
			this.activeVal = this.$store.state.navActivePath;
		},
		//点击导航触发的方法
		handleSelect(key) {
			if (key != this.$route.path) {
				this.activeVal = key.path;
				this.$router.push({ path: key.path });
				this.$store.commit('navActivePathFun', key.path);
			}
		},
		close(val) {
			this.activeNavArr = this.activeNavArr.filter(item => item !== val);
			var paths = this.activeNavArr[this.activeNavArr.length - 1];
			this.$store.commit('navActivePathFun', paths.path);
			this.activeVal = paths.path;
			this.$router.push({ path: paths.path });
		},
		closeAll(){
			this.activeNavArr = []
			this.activeNavArr.push(this.$router.options.routes[0].children[0]);
			this.activeVal = this.activeNavArr[0].path
			this.$store.commit('navActivePathFun', this.activeNavArr[0].path);
			this.$router.push({ path: this.activeNavArr[0].path });
		}
	},
	created() {
		this.getBreadcrumb();
		this.activeVal = this.$route.path;
	},
	watch: {
		$route() {
			this.getBreadcrumb();
		}
	}
};
</script>

<style lang="scss" scoped>
#SidebarItem {
	.label {
		// width: 90%;
		height: 100%;
		overflow: auto;
		flex: 1;
		.row {
			padding: 15px;
			border: 1px solid #dcdfe6;
			float: left;
			margin-right: 5px;
			padding: 0 15px;
			height: 32px;
			vertical-align: middle;
			color: #303133;
			line-height: 32px;
			border-radius: 2px;
			margin-top: 14px;
			font-size: 14px;
			background-color: #fff;
			position: relative;
			.errors {
				color: #1890ff;
				border-radius: 100%;
				font-size: 12px;
				width: 0;
				height: 15px;
				overflow: hidden;
				vertical-align: middle;
				margin-bottom: 4px;
				text-align: center;
				line-height: 15px;
				transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
			}
			.errors:hover {
				color: #fff;
				background-color: #c0c4cc;
			}
		}
		.row:hover {
			cursor: pointer;
			color: #1890ff;
			border: 1px solid #1890ff;
			.errors {
				width: 15px;
			}
		}
		.row.active {
			color: #1890ff;
			border: 1px solid #1890ff;
		}
	}
	.operation {
		height: 60px;
		margin-left: 20px;
		padding-right: 40px;
		float: right;
		.el-dropdown {
			margin-top: 25px;
		}
		.el-dropdown-link {
			cursor: pointer;
			color: #606266;
		}
		.el-icon-arrow-down {
			font-size: 12px;
		}
		.demonstration {
			display: block;
			color: #8492a6;
			font-size: 14px;
			margin-bottom: 20px;
		}
	}
}


.label::-webkit-scrollbar {
	/*滚动条整体样式*/
	width : 4px;  /*高宽分别对应横竖滚动条的尺寸*/
	height: 1px;
}
.label::-webkit-scrollbar-thumb {
	/*滚动条里面小方块*/
	border-radius: 4px;
	box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
	background   : #535353;
}
.label::-webkit-scrollbar-track {
	/*滚动条里面轨道*/
	box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
	border-radius: 5px;
	background   : #ededed;
}
</style>
