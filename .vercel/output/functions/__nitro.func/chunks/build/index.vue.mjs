import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext, toDisplayString, createBlock, openBlock, Fragment, renderList, unref, renderSlot, ref } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc, u as useRuntimeConfig, a as useDisplay } from './server.mjs';
import { e as publicAssetsURL } from '../_/nitro.mjs';
import 'pinia';
import 'vue-router';
import 'firebase/analytics';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:url';
import 'ipx';
import 'node:fs';
import 'node:path';
import 'node:crypto';

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  props: {
    drawer: Boolean
  },
  emits: ["toggle-drawer"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_app_bar = resolveComponent("v-app-bar");
      const _component_v_app_bar_nav_icon = resolveComponent("v-app-bar-nav-icon");
      const _component_v_app_bar_title = resolveComponent("v-app-bar-title");
      const _component_v_spacer = resolveComponent("v-spacer");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_icon = resolveComponent("v-icon");
      _push(ssrRenderComponent(_component_v_app_bar, mergeProps({
        app: "",
        flat: "",
        color: "primary"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_app_bar_nav_icon, {
              onClick: ($event) => _ctx.$emit("toggle-drawer")
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_app_bar_title, { class: "text-h5 text-white" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Asastra Dev`);
                } else {
                  return [
                    createTextVNode("Asastra Dev")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_spacer, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_btn, {
              icon: "",
              href: "/about"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_icon, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`mdi-account`);
                      } else {
                        return [
                          createTextVNode("mdi-account")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_icon, null, {
                      default: withCtx(() => [
                        createTextVNode("mdi-account")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_btn, {
              icon: "",
              href: "/projects"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_icon, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`mdi-briefcase`);
                      } else {
                        return [
                          createTextVNode("mdi-briefcase")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_icon, null, {
                      default: withCtx(() => [
                        createTextVNode("mdi-briefcase")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_btn, {
              icon: "",
              href: "/contact"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_icon, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`mdi-message`);
                      } else {
                        return [
                          createTextVNode("mdi-message")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_icon, null, {
                      default: withCtx(() => [
                        createTextVNode("mdi-message")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_app_bar_nav_icon, {
                onClick: ($event) => _ctx.$emit("toggle-drawer")
              }, null, 8, ["onClick"]),
              createVNode(_component_v_app_bar_title, { class: "text-h5 text-white" }, {
                default: withCtx(() => [
                  createTextVNode("Asastra Dev")
                ]),
                _: 1
              }),
              createVNode(_component_v_spacer),
              createVNode(_component_v_btn, {
                icon: "",
                href: "/about"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_icon, null, {
                    default: withCtx(() => [
                      createTextVNode("mdi-account")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_btn, {
                icon: "",
                href: "/projects"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_icon, null, {
                    default: withCtx(() => [
                      createTextVNode("mdi-briefcase")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_btn, {
                icon: "",
                href: "/contact"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_icon, null, {
                    default: withCtx(() => [
                      createTextVNode("mdi-message")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});

const _sfc_main$5 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div class="absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50"><h1 class="text-3xl font-bold">Innovative Digital Solutions</h1><p>Asastra Dev can build Apps that work well on the Internet and generate Traffic</p><p>Responsive. Performant. SEO-ready.</p></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSVG.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3]]);

const _sfc_main$4 = {
  __name: "Projects",
  __ssrInlineRender: true,
  setup(__props) {
    const projects = [
      { title: "ASASTRA – E-Commerce Web App", iframe: "https://asastra.vercel.app", description: "Built with Nuxt3 + Firebase, Vuetify and SEO in mind", github: "https://github.com/JEREMIAHJPG/ASASTRA_NEW.git" },
      { title: "My Resume Website", iframe: "https://asastra-dev.vercel.app/About", description: "Designed with Vuetify and SEO in mind", github: "https://github.com/JEREMIAHJPG/portfolio.git" },
      { title: "ASASTRA – Sign-up form page", iframe: "https://asastra.vercel.app/Signupformpage", description: "Built with Nuxt3 + Firebase", github: "https://github.com/JEREMIAHJPG/ASASTRA_NEW.git" },
      { title: "ASASTRA – Login form page", iframe: "https://asastra.vercel.app/Loginpage", description: "Built with Nuxt3 + Firebase", github: "https://github.com/JEREMIAHJPG/ASASTRA_NEW.git" },
      { title: "ASASTRA – Terms and Conditions policy page", iframe: "https://asastra.vercel.app/termsandconditions", description: "Built with Nuxt3 + Firebase", github: "https://github.com/JEREMIAHJPG/ASASTRA_NEW.git" },
      { title: "ASASTRA – Privacy policy page", iframe: "https://asastra.vercel.app/privacypolicy", description: "Built with Nuxt3 + Firebase", github: "https://github.com/JEREMIAHJPG/ASASTRA_NEW.git" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_subtitle = resolveComponent("v-card-subtitle");
      const _component_v_btn = resolveComponent("v-btn");
      _push(ssrRenderComponent(_component_v_container, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-h4 mb-4" style="${ssrRenderStyle({ "color": "white" })}"${_scopeId}>Featured Projects</h2>`);
            _push2(ssrRenderComponent(_component_v_row, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(projects, (project, index) => {
                    _push3(ssrRenderComponent(_component_v_col, {
                      cols: "12",
                      md: "5",
                      key: index
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_card, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<iframe${ssrRenderAttr("src", project.iframe)} height="517px" max-width="400px"${_scopeId4}></iframe>`);
                                _push5(ssrRenderComponent(_component_v_card_title, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(project.title)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(project.title), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_v_card_subtitle, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(project.description)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(project.description), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_v_btn, {
                                  color: "info",
                                  size: "large",
                                  rounded: "",
                                  class: "position-fixed bottom-0 callbtnlinkedin",
                                  variant: "elevated",
                                  href: project.iframe
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` View page `);
                                    } else {
                                      return [
                                        createTextVNode(" View page ")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_v_btn, {
                                  color: "success",
                                  size: "large",
                                  rounded: "",
                                  class: "position-fixed bottom-0 callbtnwatsapp",
                                  variant: "elevated",
                                  href: project.github
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` GitHub `);
                                    } else {
                                      return [
                                        createTextVNode(" GitHub ")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode("iframe", {
                                    src: project.iframe,
                                    height: "517px",
                                    "max-width": "400px"
                                  }, null, 8, ["src"]),
                                  createVNode(_component_v_card_title, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(project.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_v_card_subtitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(project.description), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_v_btn, {
                                    color: "info",
                                    size: "large",
                                    rounded: "",
                                    class: "position-fixed bottom-0 callbtnlinkedin",
                                    variant: "elevated",
                                    href: project.iframe
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" View page ")
                                    ]),
                                    _: 2
                                  }, 1032, ["href"]),
                                  createVNode(_component_v_btn, {
                                    color: "success",
                                    size: "large",
                                    rounded: "",
                                    class: "position-fixed bottom-0 callbtnwatsapp",
                                    variant: "elevated",
                                    href: project.github
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" GitHub ")
                                    ]),
                                    _: 2
                                  }, 1032, ["href"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_v_card, null, {
                              default: withCtx(() => [
                                createVNode("iframe", {
                                  src: project.iframe,
                                  height: "517px",
                                  "max-width": "400px"
                                }, null, 8, ["src"]),
                                createVNode(_component_v_card_title, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(project.title), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_v_card_subtitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(project.description), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_v_btn, {
                                  color: "info",
                                  size: "large",
                                  rounded: "",
                                  class: "position-fixed bottom-0 callbtnlinkedin",
                                  variant: "elevated",
                                  href: project.iframe
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" View page ")
                                  ]),
                                  _: 2
                                }, 1032, ["href"]),
                                createVNode(_component_v_btn, {
                                  color: "success",
                                  size: "large",
                                  rounded: "",
                                  class: "position-fixed bottom-0 callbtnwatsapp",
                                  variant: "elevated",
                                  href: project.github
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" GitHub ")
                                  ]),
                                  _: 2
                                }, 1032, ["href"])
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(projects, (project, index) => {
                      return createVNode(_component_v_col, {
                        cols: "12",
                        md: "5",
                        key: index
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card, null, {
                            default: withCtx(() => [
                              createVNode("iframe", {
                                src: project.iframe,
                                height: "517px",
                                "max-width": "400px"
                              }, null, 8, ["src"]),
                              createVNode(_component_v_card_title, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(project.title), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_v_card_subtitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(project.description), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_v_btn, {
                                color: "info",
                                size: "large",
                                rounded: "",
                                class: "position-fixed bottom-0 callbtnlinkedin",
                                variant: "elevated",
                                href: project.iframe
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" View page ")
                                ]),
                                _: 2
                              }, 1032, ["href"]),
                              createVNode(_component_v_btn, {
                                color: "success",
                                size: "large",
                                rounded: "",
                                class: "position-fixed bottom-0 callbtnwatsapp",
                                variant: "elevated",
                                href: project.github
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" GitHub ")
                                ]),
                                _: 2
                              }, 1032, ["href"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("h2", {
                class: "text-h4 mb-4",
                style: { "color": "white" }
              }, "Featured Projects"),
              createVNode(_component_v_row, null, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(projects, (project, index) => {
                    return createVNode(_component_v_col, {
                      cols: "12",
                      md: "5",
                      key: index
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, null, {
                          default: withCtx(() => [
                            createVNode("iframe", {
                              src: project.iframe,
                              height: "517px",
                              "max-width": "400px"
                            }, null, 8, ["src"]),
                            createVNode(_component_v_card_title, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(project.title), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_v_card_subtitle, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(project.description), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_v_btn, {
                              color: "info",
                              size: "large",
                              rounded: "",
                              class: "position-fixed bottom-0 callbtnlinkedin",
                              variant: "elevated",
                              href: project.iframe
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" View page ")
                              ]),
                              _: 2
                            }, 1032, ["href"]),
                            createVNode(_component_v_btn, {
                              color: "success",
                              size: "large",
                              rounded: "",
                              class: "position-fixed bottom-0 callbtnwatsapp",
                              variant: "elevated",
                              href: project.github
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" GitHub ")
                              ]),
                              _: 2
                            }, 1032, ["href"])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024);
                  }), 64))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Projects.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};

const _sfc_main$3 = {
  __name: "ContactLinks",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const whatsapp = config.public.whatsappUrl;
    const telegram = config.public.telegramUrl;
    const linkedin = config.public.linkedInUrl;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_btn = resolveComponent("v-btn");
      _push(ssrRenderComponent(_component_v_container, mergeProps({ class: "text-center my-10" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-h5" style="${ssrRenderStyle({ "color": "white" })}"${_scopeId}>Hire or Commission Me</h2>`);
            _push2(ssrRenderComponent(_component_v_btn, {
              color: "success",
              class: "ma-2",
              href: unref(whatsapp)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`WhatsApp`);
                } else {
                  return [
                    createTextVNode("WhatsApp")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_btn, {
              color: "primary",
              class: "ma-2",
              href: unref(telegram)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Telegram`);
                } else {
                  return [
                    createTextVNode("Telegram")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_btn, {
              color: "info",
              class: "ma-2",
              href: unref(linkedin)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`LinkedIn`);
                } else {
                  return [
                    createTextVNode("LinkedIn")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("h2", {
                class: "text-h5",
                style: { "color": "white" }
              }, "Hire or Commission Me"),
              createVNode(_component_v_btn, {
                color: "success",
                class: "ma-2",
                href: unref(whatsapp)
              }, {
                default: withCtx(() => [
                  createTextVNode("WhatsApp")
                ]),
                _: 1
              }, 8, ["href"]),
              createVNode(_component_v_btn, {
                color: "primary",
                class: "ma-2",
                href: unref(telegram)
              }, {
                default: withCtx(() => [
                  createTextVNode("Telegram")
                ]),
                _: 1
              }, 8, ["href"]),
              createVNode(_component_v_btn, {
                color: "info",
                class: "ma-2",
                href: unref(linkedin)
              }, {
                default: withCtx(() => [
                  createTextVNode("LinkedIn")
                ]),
                _: 1
              }, 8, ["href"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactLinks.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};

const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_v_footer = resolveComponent("v-footer");
  const _component_v_col = resolveComponent("v-col");
  _push(ssrRenderComponent(_component_v_footer, mergeProps({
    app: "",
    padless: ""
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_col, { class: "text-center py-2 bg-grey-darken-3 text-white" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` © ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Asastra. All rights reserved. `);
            } else {
              return [
                createTextVNode(" © " + toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " Asastra. All rights reserved. ", 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_col, { class: "text-center py-2 bg-grey-darken-3 text-white" }, {
            default: withCtx(() => [
              createTextVNode(" © " + toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " Asastra. All rights reserved. ", 1)
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainFooter.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);

const _sfc_main$1 = {
  name: "GalaxyEarthBackground",
  setup() {
    const { mobile } = useDisplay();
    return { isMobile: mobile.value };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_container = resolveComponent("v-container");
  const _component_v_img = resolveComponent("v-img");
  _push(ssrRenderComponent(_component_v_container, mergeProps({
    fluid: "",
    class: "pa-0 galaxy-wrapper"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_img, {
          src: "/galaxy.jpg",
          class: "galaxy-bg",
          cover: ""
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_img, {
          src: "/earth.gif",
          class: "earth-gif",
          "max-width": "200",
          "aspect-ratio": "1",
          style: { bottom: $setup.isMobile ? "5%" : "10%" }
        }, null, _parent2, _scopeId));
        _push2(`<div class="overlay-content" data-v-826f5821${_scopeId}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
        _push2(`</div>`);
      } else {
        return [
          createVNode(_component_v_img, {
            src: "/galaxy.jpg",
            class: "galaxy-bg",
            cover: ""
          }),
          createVNode(_component_v_img, {
            src: "/earth.gif",
            class: "earth-gif",
            "max-width": "200",
            "aspect-ratio": "1",
            style: { bottom: $setup.isMobile ? "5%" : "10%" }
          }, null, 8, ["style"]),
          createVNode("div", { class: "overlay-content" }, [
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GalaxyEarthBackground.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const GalaxyEarthBackground = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-826f5821"]]);

const _imports_0 = publicAssetsURL("/mylogomedium.jpg");

const _sfc_main = {
  name: "IndexPage",
  components: {
    GalaxyEarthBackground,
    Header: _sfc_main$6,
    HeroSVG: __nuxt_component_1,
    Projects: _sfc_main$4,
    ContactLinks: _sfc_main$3,
    MainFooter: __nuxt_component_4
  },
  setup() {
    const drawer = ref(false);
    const filteredSidebars = [
      { pagename: "Home", routename: "/", materialdesigniconname: "home" },
      { pagename: "About", routename: "/About", materialdesigniconname: "account" }
      //    { pagename: 'Projects', routename: '/projects', materialdesigniconname: 'briefcase' },
      //     { pagename: 'Contact', routename: '/contact', materialdesigniconname: 'email' }
    ];
    const config = useRuntimeConfig();
    const whatsapp = config.public.whatsappUrl;
    const telegram = config.public.telegramUrl;
    const linkedin = config.public.linkedInUrl;
    return {
      drawer,
      filteredSidebars,
      whatsapp,
      telegram,
      linkedin
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_app = resolveComponent("v-app");
  const _component_v_navigation_drawer = resolveComponent("v-navigation-drawer");
  const _component_v_list = resolveComponent("v-list");
  const _component_v_sheet = resolveComponent("v-sheet");
  const _component_v_avatar = resolveComponent("v-avatar");
  const _component_v_icon = resolveComponent("v-icon");
  const _component_v_divider = resolveComponent("v-divider");
  const _component_v_list_item = resolveComponent("v-list-item");
  const _component_router_link = resolveComponent("router-link");
  const _component_v_main = resolveComponent("v-main");
  const _component_v_container = resolveComponent("v-container");
  const _component_Header = _sfc_main$6;
  const _component_v_btn = resolveComponent("v-btn");
  const _component_HeroSVG = __nuxt_component_1;
  const _component_Projects = _sfc_main$4;
  const _component_ContactLinks = _sfc_main$3;
  const _component_MainFooter = __nuxt_component_4;
  _push(ssrRenderComponent(_component_v_app, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="background-container" data-v-24b99dfb${_scopeId}><div class="background-galaxy" data-v-24b99dfb${_scopeId}></div></div>`);
        _push2(ssrRenderComponent(_component_v_navigation_drawer, {
          modelValue: $setup.drawer,
          "onUpdate:modelValue": ($event) => $setup.drawer = $event,
          app: "",
          color: "black lighten-4"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_list, { dense: "" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_sheet, {
                      color: "black",
                      class: "text-center py-4"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_avatar, {
                            size: "99",
                            color: "black"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<img${ssrRenderAttr("src", _imports_0)} alt="Logo" data-v-24b99dfb${_scopeId5}>`);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: _imports_0,
                                    alt: "Logo"
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_v_icon, { class: "asastra-name" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Asastra Dev`);
                              } else {
                                return [
                                  createTextVNode("Asastra Dev")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_avatar, {
                              size: "99",
                              color: "black"
                            }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: _imports_0,
                                  alt: "Logo"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_icon, { class: "asastra-name" }, {
                              default: withCtx(() => [
                                createTextVNode("Asastra Dev")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_divider, null, null, _parent4, _scopeId3));
                    _push4(`<!--[-->`);
                    ssrRenderList($setup.filteredSidebars, (sidebar, index2) => {
                      _push4(ssrRenderComponent(_component_v_list_item, { key: index2 }, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(ssrRenderComponent(_component_router_link, {
                              class: "topbar2 text-center",
                              to: sidebar.routename
                            }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(ssrRenderComponent(_component_v_icon, { left: "" }, {
                                    default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                      if (_push7) {
                                        _push7(`mdi-${ssrInterpolate(sidebar.materialdesigniconname)}`);
                                      } else {
                                        return [
                                          createTextVNode("mdi-" + toDisplayString(sidebar.materialdesigniconname), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent6, _scopeId5));
                                  _push6(` ${ssrInterpolate(sidebar.pagename)}`);
                                } else {
                                  return [
                                    createVNode(_component_v_icon, { left: "" }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-" + toDisplayString(sidebar.materialdesigniconname), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createTextVNode(" " + toDisplayString(sidebar.pagename), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                          } else {
                            return [
                              createVNode(_component_router_link, {
                                class: "topbar2 text-center",
                                to: sidebar.routename
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_icon, { left: "" }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-" + toDisplayString(sidebar.materialdesigniconname), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createTextVNode(" " + toDisplayString(sidebar.pagename), 1)
                                ]),
                                _: 2
                              }, 1032, ["to"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                    });
                    _push4(`<!--]-->`);
                  } else {
                    return [
                      createVNode(_component_v_sheet, {
                        color: "black",
                        class: "text-center py-4"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_avatar, {
                            size: "99",
                            color: "black"
                          }, {
                            default: withCtx(() => [
                              createVNode("img", {
                                src: _imports_0,
                                alt: "Logo"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_icon, { class: "asastra-name" }, {
                            default: withCtx(() => [
                              createTextVNode("Asastra Dev")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_divider),
                      (openBlock(true), createBlock(Fragment, null, renderList($setup.filteredSidebars, (sidebar, index2) => {
                        return openBlock(), createBlock(_component_v_list_item, { key: index2 }, {
                          default: withCtx(() => [
                            createVNode(_component_router_link, {
                              class: "topbar2 text-center",
                              to: sidebar.routename
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_icon, { left: "" }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-" + toDisplayString(sidebar.materialdesigniconname), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createTextVNode(" " + toDisplayString(sidebar.pagename), 1)
                              ]),
                              _: 2
                            }, 1032, ["to"])
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_list, { dense: "" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_sheet, {
                      color: "black",
                      class: "text-center py-4"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_avatar, {
                          size: "99",
                          color: "black"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: _imports_0,
                              alt: "Logo"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_icon, { class: "asastra-name" }, {
                          default: withCtx(() => [
                            createTextVNode("Asastra Dev")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_divider),
                    (openBlock(true), createBlock(Fragment, null, renderList($setup.filteredSidebars, (sidebar, index2) => {
                      return openBlock(), createBlock(_component_v_list_item, { key: index2 }, {
                        default: withCtx(() => [
                          createVNode(_component_router_link, {
                            class: "topbar2 text-center",
                            to: sidebar.routename
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, { left: "" }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-" + toDisplayString(sidebar.materialdesigniconname), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createTextVNode(" " + toDisplayString(sidebar.pagename), 1)
                            ]),
                            _: 2
                          }, 1032, ["to"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_main, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_container, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_Header, {
                      drawer: $setup.drawer,
                      onToggleDrawer: ($event) => $setup.drawer = !$setup.drawer
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_btn, {
                      color: "success",
                      size: "large",
                      rounded: "",
                      class: "position-fixed bottom-0 callbtnwatsapp",
                      variant: "elevated",
                      href: $setup.whatsapp
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_icon, { left: "" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`mdi-whatsapp`);
                              } else {
                                return [
                                  createTextVNode("mdi-whatsapp")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_icon, { left: "" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-whatsapp")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_btn, {
                      color: "primary",
                      size: "large",
                      rounded: "",
                      class: "position-fixed bottom-0 callbtntelegram",
                      variant: "elevated",
                      href: $setup.telegram
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_icon, { left: "" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`mdi-telegram`);
                              } else {
                                return [
                                  createTextVNode("mdi-telegram")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_icon, { left: "" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-telegram")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_btn, {
                      color: "info",
                      size: "large",
                      rounded: "",
                      class: "position-fixed bottom-0 callbtnlinkedin",
                      variant: "elevated",
                      href: $setup.linkedin
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_icon, { left: "" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`mdi-linkedin`);
                              } else {
                                return [
                                  createTextVNode("mdi-linkedin")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_icon, { left: "" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-linkedin")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_HeroSVG, null, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_Projects, null, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_ContactLinks, null, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_MainFooter, null, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_Header, {
                        drawer: $setup.drawer,
                        onToggleDrawer: ($event) => $setup.drawer = !$setup.drawer
                      }, null, 8, ["drawer", "onToggleDrawer"]),
                      createVNode(_component_v_btn, {
                        color: "success",
                        size: "large",
                        rounded: "",
                        class: "position-fixed bottom-0 callbtnwatsapp",
                        variant: "elevated",
                        href: $setup.whatsapp
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_icon, { left: "" }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-whatsapp")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["href"]),
                      createVNode(_component_v_btn, {
                        color: "primary",
                        size: "large",
                        rounded: "",
                        class: "position-fixed bottom-0 callbtntelegram",
                        variant: "elevated",
                        href: $setup.telegram
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_icon, { left: "" }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-telegram")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["href"]),
                      createVNode(_component_v_btn, {
                        color: "info",
                        size: "large",
                        rounded: "",
                        class: "position-fixed bottom-0 callbtnlinkedin",
                        variant: "elevated",
                        href: $setup.linkedin
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_icon, { left: "" }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-linkedin")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["href"]),
                      createVNode(_component_HeroSVG),
                      createVNode(_component_Projects),
                      createVNode(_component_ContactLinks),
                      createVNode(_component_MainFooter)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_container, null, {
                  default: withCtx(() => [
                    createVNode(_component_Header, {
                      drawer: $setup.drawer,
                      onToggleDrawer: ($event) => $setup.drawer = !$setup.drawer
                    }, null, 8, ["drawer", "onToggleDrawer"]),
                    createVNode(_component_v_btn, {
                      color: "success",
                      size: "large",
                      rounded: "",
                      class: "position-fixed bottom-0 callbtnwatsapp",
                      variant: "elevated",
                      href: $setup.whatsapp
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, { left: "" }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-whatsapp")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    createVNode(_component_v_btn, {
                      color: "primary",
                      size: "large",
                      rounded: "",
                      class: "position-fixed bottom-0 callbtntelegram",
                      variant: "elevated",
                      href: $setup.telegram
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, { left: "" }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-telegram")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    createVNode(_component_v_btn, {
                      color: "info",
                      size: "large",
                      rounded: "",
                      class: "position-fixed bottom-0 callbtnlinkedin",
                      variant: "elevated",
                      href: $setup.linkedin
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, { left: "" }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-linkedin")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    createVNode(_component_HeroSVG),
                    createVNode(_component_Projects),
                    createVNode(_component_ContactLinks),
                    createVNode(_component_MainFooter)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode("div", { class: "background-container" }, [
            createVNode("div", { class: "background-galaxy" })
          ]),
          createVNode(_component_v_navigation_drawer, {
            modelValue: $setup.drawer,
            "onUpdate:modelValue": ($event) => $setup.drawer = $event,
            app: "",
            color: "black lighten-4"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_list, { dense: "" }, {
                default: withCtx(() => [
                  createVNode(_component_v_sheet, {
                    color: "black",
                    class: "text-center py-4"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_avatar, {
                        size: "99",
                        color: "black"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: _imports_0,
                            alt: "Logo"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_icon, { class: "asastra-name" }, {
                        default: withCtx(() => [
                          createTextVNode("Asastra Dev")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_divider),
                  (openBlock(true), createBlock(Fragment, null, renderList($setup.filteredSidebars, (sidebar, index2) => {
                    return openBlock(), createBlock(_component_v_list_item, { key: index2 }, {
                      default: withCtx(() => [
                        createVNode(_component_router_link, {
                          class: "topbar2 text-center",
                          to: sidebar.routename
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_icon, { left: "" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-" + toDisplayString(sidebar.materialdesigniconname), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createTextVNode(" " + toDisplayString(sidebar.pagename), 1)
                          ]),
                          _: 2
                        }, 1032, ["to"])
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue", "onUpdate:modelValue"]),
          createVNode(_component_v_main, null, {
            default: withCtx(() => [
              createVNode(_component_v_container, null, {
                default: withCtx(() => [
                  createVNode(_component_Header, {
                    drawer: $setup.drawer,
                    onToggleDrawer: ($event) => $setup.drawer = !$setup.drawer
                  }, null, 8, ["drawer", "onToggleDrawer"]),
                  createVNode(_component_v_btn, {
                    color: "success",
                    size: "large",
                    rounded: "",
                    class: "position-fixed bottom-0 callbtnwatsapp",
                    variant: "elevated",
                    href: $setup.whatsapp
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_icon, { left: "" }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-whatsapp")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  createVNode(_component_v_btn, {
                    color: "primary",
                    size: "large",
                    rounded: "",
                    class: "position-fixed bottom-0 callbtntelegram",
                    variant: "elevated",
                    href: $setup.telegram
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_icon, { left: "" }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-telegram")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  createVNode(_component_v_btn, {
                    color: "info",
                    size: "large",
                    rounded: "",
                    class: "position-fixed bottom-0 callbtnlinkedin",
                    variant: "elevated",
                    href: $setup.linkedin
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_icon, { left: "" }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-linkedin")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  createVNode(_component_HeroSVG),
                  createVNode(_component_Projects),
                  createVNode(_component_ContactLinks),
                  createVNode(_component_MainFooter)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-24b99dfb"]]);

export { index as default };
//# sourceMappingURL=index.vue.mjs.map
