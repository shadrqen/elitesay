import Vue from 'vue'
import { config } from '@vue/test-utils'

Vue.config.silent = true

// Mock Nuxt components
config.stubs.nuxt = { template: '<div />' }
config.stubs['nuxt-link'] = { template: '<a><slot /></a>' }
config.stubs['no-ssr'] = { template: '<span><slot /></span>' }
config.stubs['no-ssr'] = { template: '<span><slot /></span>' }
config.stubs['client-only'] = { template: '<span><slot /></span>' }
