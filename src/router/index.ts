import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
	{
		path: "/authorization",
		name: "Authorization",
		component: () => import("@/views/TheAuthorization.vue")
	},
	{
		path: "/registration",
		name: "Registration",
		component: () => import("@/views/TheRegistration.vue")
	},
	{
		path: "/recovery",
		name: "Recovery",
		component: () => import("@/views/TheRecovery.vue")
	},
	{
		path: "/terminal",
		name: "Terminal",
		component: () => import("@/views/TheTerminal.vue"),
		children: [
			{
				path: 'open',
				component: () => import("@/components/Terminal/Views/TerminalOpen.vue")
			},
			{
				path: 'average',
				component: () => import("@/components/Terminal/Views/TerminalAverage.vue")
			},
			{
				path: 'close',
				component: () => import("@/components/Terminal/Views/TerminalClose.vue")
			},
			{
				path: 'sl',
				component: () => import("@/components/Terminal/Views/TerminalSL.vue")
			},
			{
				path: 'slx',
				component: () => import("@/components/Terminal/Views/TerminalSLX.vue")
			},
			{
				path: 'tp',
				component: () => import("@/components/Terminal/Views/TerminalTP.vue")
			},
		],
		beforeEnter: (to, from, next) => {
			if (to.path === "/terminal") {
				next({ path: "/terminal/average" })
			} else {
				next()
			}
		}
	},
	{
		path: "/settings",
		name: "Settings",
		component: () => import("@/views/TheSettings.vue"),
		children: [
			{
				path: "volume",
				component: () => import("@/components/Settings/Views/SettingsVolume.vue")
			},
			{
				path: "deal",
				// component: () => import("@/components/Settings/Views/SettingsDeal.vue")
				component: () => import("@/components/Settings/Elements/SettingsAlert.vue")
			},
			{
				path: "gTrades",
				component: () => import("@/components/Settings/Views/SettingsGTrades.vue")
			},
			{
				path: "gVolume",
				component: () => import("@/components/Settings/Views/SettingsGVolume.vue")
			},
			{
				path: "choose-time",
				component: () => import("@/components/Settings/Views/SettingsChooseTime.vue")
			},
			{
				path: "choose-amount",
				component: () => import("@/components/Settings/Views/SettingsChooseAmount.vue")
			},
			{
				path: "all-strategies",
				component: () => import("@/components/Settings/Views/SettingsAllStrategies.vue")
			},
			{
				path: "rollback-strategy",
				component: () => import("@/components/Settings/Views/SettingsRollbackStrategy.vue")
			},
			{
				path: "flat-strategy",
				component: () => import("@/components/Settings/Views/SettingsFlatStrategy.vue")
			},
			{
				path: "katana-strategy",
				component: () => import("@/components/Settings/Views/SettingsKatanaStrategy.vue")
			},
		]
	},
	{
		path: "/menu",
		name: "Menu",
		component: () => import("@/views/TheMenu.vue"),
		children: [
			{
				path: "2fa",
				component: () => import("@/components/Menu/Views/Menu2FA.vue")
			},
			{
				path: "telegram-bot",
				component: () => import("@/components/Menu/Views/MenuTelegramBot.vue")
			},
			{
				path: "telegram-bot-create",
				component: () => import("@/components/Menu/Views/MenuTelegramBotCreate.vue")
			},
		],
		beforeEnter: (to, from, next) => {
			if (to.path === "/menu") {
				next({ path: "/menu/2fa" })
			} else {
				next()
			}
		},

	},
	{
		path: "/add-account",
		name: "TheAddAccount",
		component: () => import("@/views/TheAddAccount.vue")
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
