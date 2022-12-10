<template>
	<div>
		<div class="shensuo" @click="zoom()">
			<i class="el-icon-s-fold" title="收起" v-if="!zoomVal"></i>
			<i class="el-icon-s-unfold" title="展开" v-if="zoomVal"></i>
		</div>
		
		<div class="breadcrumb-left" v-if="getBreadcrumbVal === 'HomePage'">
			<span>{{getBreadcrumbVal}}<i class="el-icon-arrow-right"></i></span>
		</div>
		<div class="breadcrumb-right">
			<div class="admin">
				<el-dropdown>
					<div style="cursor: pointer;height: 40px;">
						<span class="el-dropdown-link">
							User One
							<i class="el-icon-arrow-down el-icon--right"></i>
						</span>
					</div>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item @click.native="logOut()">Sign Out</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			zoomVal: false,
			getBreadcrumbVal:null,
			activeNavArr:[]
		};
	},
	methods: {
		logOut(){
			console.log('111')
		  localStorage.setItem('token', '') //清空token
		  this.$router.push({ path: '/login' }) //跳转到登录页面
		},
		zoom() {
			this.zoomVal = !this.zoomVal;
			this.$store.commit('navZoom', this.zoomVal);
		},
		getBreadcrumb() {
			if(this.$route.matched[0].meta.title == 'HomePage') {
				this.getBreadcrumbVal = []
				this.getBreadcrumbVal = this.$route.matched[0].meta.title
			}else {
				this.getBreadcrumbVal = []
				this.$route.matched.forEach((v) => {
					this.getBreadcrumbVal.push(v.meta.title)
				})
			}
			
			this.activeNavArr.push(this.$route.matched[1])
			this.activeNavArr = this.activeNavArr.reduce((all,next)=>all.some((item)=>item['path']==next['path'])?all:[...all,next],[]);
		}
	},
	created() {
		this.getBreadcrumb();
	},
	watch: {
		$route() {
			this.getBreadcrumb();
		}
	}
};
</script>

<style lang="scss">
.breadcrumb-right {
	padding-right: 20px;
	box-sizing: border-box;
	float: right;
}
.breadcrumb-right span {
	color: #606266;
	margin-right: 10px;
}
.breadcrumb-right .admin {
	display: inline-block;
	margin-right: 10px;
}
.breadcrumb-right .admin img{
	width: 40px;
	height: 40px;
	border-radius: 40px;
	vertical-align: middle;
	margin-bottom: 10px;
	margin-right: 3px;
}
.breadcrumb-left {
	font-size: 14px;
	float: left;
	padding-left: 20px;
	box-sizing: border-box;
}
.breadcrumb-left span {
	color: #606266;
	margin-right: 10px;
}
.breadcrumb-left span:last-child i{
	display: none;
}
.shensuo {
	color: rgba(0, 0, 0, 0.65);
	cursor: pointer;
	font-size: 20px;
	float: left;
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
.el-dropdown-menu__item.is-disabled {
	color: #606266!important;
}
</style>
