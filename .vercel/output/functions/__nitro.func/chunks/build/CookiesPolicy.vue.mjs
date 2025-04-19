import { resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:url';
import 'ipx';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'pinia';
import 'vue-router';
import 'firebase/analytics';

const _sfc_main = {
  name: "CookiesPolicy"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_container = resolveComponent("v-container");
  const _component_v_card = resolveComponent("v-card");
  const _component_v_card_title = resolveComponent("v-card-title");
  const _component_v_card_subtitle = resolveComponent("v-card-subtitle");
  const _component_v_card_text = resolveComponent("v-card-text");
  const _component_v_divider = resolveComponent("v-divider");
  const _component_v_list = resolveComponent("v-list");
  const _component_v_list_item = resolveComponent("v-list-item");
  _push(ssrRenderComponent(_component_v_container, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_card, {
          class: "pa-5",
          elevation: "2"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_card_title, { class: "text-h4 font-weight-bold" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Cookies Policy`);
                  } else {
                    return [
                      createTextVNode("Cookies Policy")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_card_subtitle, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Last updated: March 28, 2025`);
                  } else {
                    return [
                      createTextVNode("Last updated: March 28, 2025")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_card_text, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<p data-v-379fd3d1${_scopeId3}> This Cookies Policy explains what Cookies are and how We use them. You should read this policy so You can understand what type of cookies We use, or the information We collect using Cookies and how that information is used. This Cookies Policy has been created with the help of the <a href="https://www.termsfeed.com/cookies-policy-generator/" target="_blank" data-v-379fd3d1${_scopeId3}>Cookies Policy Generator</a>. </p><p data-v-379fd3d1${_scopeId3}> Cookies do not typically contain any information that personally identifies a user, but personal information that we store about You may be linked to the information stored in and obtained from Cookies. For further information on how We use, store and keep your personal data secure, see our Privacy Policy. </p>`);
                  } else {
                    return [
                      createVNode("p", null, [
                        createTextVNode(" This Cookies Policy explains what Cookies are and how We use them. You should read this policy so You can understand what type of cookies We use, or the information We collect using Cookies and how that information is used. This Cookies Policy has been created with the help of the "),
                        createVNode("a", {
                          href: "https://www.termsfeed.com/cookies-policy-generator/",
                          target: "_blank"
                        }, "Cookies Policy Generator"),
                        createTextVNode(". ")
                      ]),
                      createVNode("p", null, " Cookies do not typically contain any information that personally identifies a user, but personal information that we store about You may be linked to the information stored in and obtained from Cookies. For further information on how We use, store and keep your personal data secure, see our Privacy Policy. ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_card_text, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<h2 class="text-h5 font-weight-bold" data-v-379fd3d1${_scopeId3}>Interpretation and Definitions</h2><h3 class="text-h6 font-weight-medium" data-v-379fd3d1${_scopeId3}>Interpretation</h3><p data-v-379fd3d1${_scopeId3}> The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural. </p>`);
                  } else {
                    return [
                      createVNode("h2", { class: "text-h5 font-weight-bold" }, "Interpretation and Definitions"),
                      createVNode("h3", { class: "text-h6 font-weight-medium" }, "Interpretation"),
                      createVNode("p", null, " The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural. ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_card_text, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<h3 class="text-h6 font-weight-medium" data-v-379fd3d1${_scopeId3}>Definitions</h3>`);
                    _push4(ssrRenderComponent(_component_v_list, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_list_item, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<strong data-v-379fd3d1${_scopeId5}>Company</strong> refers to Asastra Art and Technology, 56B Odogbolu Street, Aguda, Surulere, Lagos. `);
                              } else {
                                return [
                                  createVNode("strong", null, "Company"),
                                  createTextVNode(" refers to Asastra Art and Technology, 56B Odogbolu Street, Aguda, Surulere, Lagos. ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_v_list_item, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<strong data-v-379fd3d1${_scopeId5}>Cookies</strong> are small files placed on your computer or mobile device to store browsing history and enhance functionality. `);
                              } else {
                                return [
                                  createVNode("strong", null, "Cookies"),
                                  createTextVNode(" are small files placed on your computer or mobile device to store browsing history and enhance functionality. ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_v_list_item, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<strong data-v-379fd3d1${_scopeId5}>Website</strong> refers to Asastra Art and Technology, accessible at <a href="https://asastra.vercel.app" target="_blank" data-v-379fd3d1${_scopeId5}>Asastra Art and Tech</a>. `);
                              } else {
                                return [
                                  createVNode("strong", null, "Website"),
                                  createTextVNode(" refers to Asastra Art and Technology, accessible at "),
                                  createVNode("a", {
                                    href: "https://asastra.vercel.app",
                                    target: "_blank"
                                  }, "Asastra Art and Tech"),
                                  createTextVNode(". ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_list_item, null, {
                              default: withCtx(() => [
                                createVNode("strong", null, "Company"),
                                createTextVNode(" refers to Asastra Art and Technology, 56B Odogbolu Street, Aguda, Surulere, Lagos. ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_list_item, null, {
                              default: withCtx(() => [
                                createVNode("strong", null, "Cookies"),
                                createTextVNode(" are small files placed on your computer or mobile device to store browsing history and enhance functionality. ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_list_item, null, {
                              default: withCtx(() => [
                                createVNode("strong", null, "Website"),
                                createTextVNode(" refers to Asastra Art and Technology, accessible at "),
                                createVNode("a", {
                                  href: "https://asastra.vercel.app",
                                  target: "_blank"
                                }, "Asastra Art and Tech"),
                                createTextVNode(". ")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode("h3", { class: "text-h6 font-weight-medium" }, "Definitions"),
                      createVNode(_component_v_list, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_list_item, null, {
                            default: withCtx(() => [
                              createVNode("strong", null, "Company"),
                              createTextVNode(" refers to Asastra Art and Technology, 56B Odogbolu Street, Aguda, Surulere, Lagos. ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_list_item, null, {
                            default: withCtx(() => [
                              createVNode("strong", null, "Cookies"),
                              createTextVNode(" are small files placed on your computer or mobile device to store browsing history and enhance functionality. ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_list_item, null, {
                            default: withCtx(() => [
                              createVNode("strong", null, "Website"),
                              createTextVNode(" refers to Asastra Art and Technology, accessible at "),
                              createVNode("a", {
                                href: "https://asastra.vercel.app",
                                target: "_blank"
                              }, "Asastra Art and Tech"),
                              createTextVNode(". ")
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
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_card_text, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<h2 class="text-h5 font-weight-bold" data-v-379fd3d1${_scopeId3}>The Use of Cookies</h2><h3 class="text-h6 font-weight-medium" data-v-379fd3d1${_scopeId3}>Types of Cookies We Use</h3><p data-v-379fd3d1${_scopeId3}> Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies. Persistent Cookies remain on your device, while Session Cookies are deleted as soon as you close your browser. </p>`);
                    _push4(ssrRenderComponent(_component_v_list, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_list_item, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<strong data-v-379fd3d1${_scopeId5}>Necessary / Essential Cookies</strong>: These cookies are required for website functionality and security. `);
                              } else {
                                return [
                                  createVNode("strong", null, "Necessary / Essential Cookies"),
                                  createTextVNode(": These cookies are required for website functionality and security. ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_v_list_item, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<strong data-v-379fd3d1${_scopeId5}>Functionality Cookies</strong>: These cookies remember user preferences, improving experience. `);
                              } else {
                                return [
                                  createVNode("strong", null, "Functionality Cookies"),
                                  createTextVNode(": These cookies remember user preferences, improving experience. ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_list_item, null, {
                              default: withCtx(() => [
                                createVNode("strong", null, "Necessary / Essential Cookies"),
                                createTextVNode(": These cookies are required for website functionality and security. ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_list_item, null, {
                              default: withCtx(() => [
                                createVNode("strong", null, "Functionality Cookies"),
                                createTextVNode(": These cookies remember user preferences, improving experience. ")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode("h2", { class: "text-h5 font-weight-bold" }, "The Use of Cookies"),
                      createVNode("h3", { class: "text-h6 font-weight-medium" }, "Types of Cookies We Use"),
                      createVNode("p", null, ' Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on your device, while Session Cookies are deleted as soon as you close your browser. '),
                      createVNode(_component_v_list, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_list_item, null, {
                            default: withCtx(() => [
                              createVNode("strong", null, "Necessary / Essential Cookies"),
                              createTextVNode(": These cookies are required for website functionality and security. ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_list_item, null, {
                            default: withCtx(() => [
                              createVNode("strong", null, "Functionality Cookies"),
                              createTextVNode(": These cookies remember user preferences, improving experience. ")
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
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_card_text, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<h3 class="text-h6 font-weight-medium" data-v-379fd3d1${_scopeId3}>Your Choices Regarding Cookies</h3><p data-v-379fd3d1${_scopeId3}> You can disable Cookies in your browser settings. If you do not accept Cookies, some features of the Website may not function properly. </p><p data-v-379fd3d1${_scopeId3}>Instructions for disabling Cookies in popular browsers:</p>`);
                    _push4(ssrRenderComponent(_component_v_list, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_list_item, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<a href="https://support.google.com/accounts/answer/32050" target="_blank" data-v-379fd3d1${_scopeId5}>Chrome</a>`);
                              } else {
                                return [
                                  createVNode("a", {
                                    href: "https://support.google.com/accounts/answer/32050",
                                    target: "_blank"
                                  }, "Chrome")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_v_list_item, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<a href="http://support.microsoft.com/kb/278835" target="_blank" data-v-379fd3d1${_scopeId5}>Internet Explorer</a>`);
                              } else {
                                return [
                                  createVNode("a", {
                                    href: "http://support.microsoft.com/kb/278835",
                                    target: "_blank"
                                  }, "Internet Explorer")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_v_list_item, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<a href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored" target="_blank" data-v-379fd3d1${_scopeId5}>Firefox</a>`);
                              } else {
                                return [
                                  createVNode("a", {
                                    href: "https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored",
                                    target: "_blank"
                                  }, "Firefox")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_v_list_item, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" data-v-379fd3d1${_scopeId5}>Safari</a>`);
                              } else {
                                return [
                                  createVNode("a", {
                                    href: "https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac",
                                    target: "_blank"
                                  }, "Safari")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_list_item, null, {
                              default: withCtx(() => [
                                createVNode("a", {
                                  href: "https://support.google.com/accounts/answer/32050",
                                  target: "_blank"
                                }, "Chrome")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_list_item, null, {
                              default: withCtx(() => [
                                createVNode("a", {
                                  href: "http://support.microsoft.com/kb/278835",
                                  target: "_blank"
                                }, "Internet Explorer")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_list_item, null, {
                              default: withCtx(() => [
                                createVNode("a", {
                                  href: "https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored",
                                  target: "_blank"
                                }, "Firefox")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_list_item, null, {
                              default: withCtx(() => [
                                createVNode("a", {
                                  href: "https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac",
                                  target: "_blank"
                                }, "Safari")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode("h3", { class: "text-h6 font-weight-medium" }, "Your Choices Regarding Cookies"),
                      createVNode("p", null, " You can disable Cookies in your browser settings. If you do not accept Cookies, some features of the Website may not function properly. "),
                      createVNode("p", null, "Instructions for disabling Cookies in popular browsers:"),
                      createVNode(_component_v_list, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_list_item, null, {
                            default: withCtx(() => [
                              createVNode("a", {
                                href: "https://support.google.com/accounts/answer/32050",
                                target: "_blank"
                              }, "Chrome")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_list_item, null, {
                            default: withCtx(() => [
                              createVNode("a", {
                                href: "http://support.microsoft.com/kb/278835",
                                target: "_blank"
                              }, "Internet Explorer")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_list_item, null, {
                            default: withCtx(() => [
                              createVNode("a", {
                                href: "https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored",
                                target: "_blank"
                              }, "Firefox")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_list_item, null, {
                            default: withCtx(() => [
                              createVNode("a", {
                                href: "https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac",
                                target: "_blank"
                              }, "Safari")
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
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_card_text, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<h3 class="text-h6 font-weight-medium" data-v-379fd3d1${_scopeId3}>More Information</h3><p data-v-379fd3d1${_scopeId3}>Learn more about cookies at <a href="https://www.termsfeed.com/blog/cookies/" target="_blank" data-v-379fd3d1${_scopeId3}>TermsFeed</a>.</p>`);
                  } else {
                    return [
                      createVNode("h3", { class: "text-h6 font-weight-medium" }, "More Information"),
                      createVNode("p", null, [
                        createTextVNode("Learn more about cookies at "),
                        createVNode("a", {
                          href: "https://www.termsfeed.com/blog/cookies/",
                          target: "_blank"
                        }, "TermsFeed"),
                        createTextVNode(".")
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_card_text, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<h3 class="text-h6 font-weight-medium" data-v-379fd3d1${_scopeId3}>Contact Us</h3><p data-v-379fd3d1${_scopeId3}> If you have any questions about this Cookies Policy, contact us via email: <a href="mailto:jeremiahchukwuebukao@gmail.com" data-v-379fd3d1${_scopeId3}>jeremiahchukwuebukao@gmail.com</a></p>`);
                  } else {
                    return [
                      createVNode("h3", { class: "text-h6 font-weight-medium" }, "Contact Us"),
                      createVNode("p", null, [
                        createTextVNode(" If you have any questions about this Cookies Policy, contact us via email: "),
                        createVNode("a", { href: "mailto:jeremiahchukwuebukao@gmail.com" }, "jeremiahchukwuebukao@gmail.com")
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_card_title, { class: "text-h4 font-weight-bold" }, {
                  default: withCtx(() => [
                    createTextVNode("Cookies Policy")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_card_subtitle, null, {
                  default: withCtx(() => [
                    createTextVNode("Last updated: March 28, 2025")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_card_text, null, {
                  default: withCtx(() => [
                    createVNode("p", null, [
                      createTextVNode(" This Cookies Policy explains what Cookies are and how We use them. You should read this policy so You can understand what type of cookies We use, or the information We collect using Cookies and how that information is used. This Cookies Policy has been created with the help of the "),
                      createVNode("a", {
                        href: "https://www.termsfeed.com/cookies-policy-generator/",
                        target: "_blank"
                      }, "Cookies Policy Generator"),
                      createTextVNode(". ")
                    ]),
                    createVNode("p", null, " Cookies do not typically contain any information that personally identifies a user, but personal information that we store about You may be linked to the information stored in and obtained from Cookies. For further information on how We use, store and keep your personal data secure, see our Privacy Policy. ")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_divider),
                createVNode(_component_v_card_text, null, {
                  default: withCtx(() => [
                    createVNode("h2", { class: "text-h5 font-weight-bold" }, "Interpretation and Definitions"),
                    createVNode("h3", { class: "text-h6 font-weight-medium" }, "Interpretation"),
                    createVNode("p", null, " The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural. ")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_divider),
                createVNode(_component_v_card_text, null, {
                  default: withCtx(() => [
                    createVNode("h3", { class: "text-h6 font-weight-medium" }, "Definitions"),
                    createVNode(_component_v_list, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_list_item, null, {
                          default: withCtx(() => [
                            createVNode("strong", null, "Company"),
                            createTextVNode(" refers to Asastra Art and Technology, 56B Odogbolu Street, Aguda, Surulere, Lagos. ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_list_item, null, {
                          default: withCtx(() => [
                            createVNode("strong", null, "Cookies"),
                            createTextVNode(" are small files placed on your computer or mobile device to store browsing history and enhance functionality. ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_list_item, null, {
                          default: withCtx(() => [
                            createVNode("strong", null, "Website"),
                            createTextVNode(" refers to Asastra Art and Technology, accessible at "),
                            createVNode("a", {
                              href: "https://asastra.vercel.app",
                              target: "_blank"
                            }, "Asastra Art and Tech"),
                            createTextVNode(". ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_divider),
                createVNode(_component_v_card_text, null, {
                  default: withCtx(() => [
                    createVNode("h2", { class: "text-h5 font-weight-bold" }, "The Use of Cookies"),
                    createVNode("h3", { class: "text-h6 font-weight-medium" }, "Types of Cookies We Use"),
                    createVNode("p", null, ' Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on your device, while Session Cookies are deleted as soon as you close your browser. '),
                    createVNode(_component_v_list, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_list_item, null, {
                          default: withCtx(() => [
                            createVNode("strong", null, "Necessary / Essential Cookies"),
                            createTextVNode(": These cookies are required for website functionality and security. ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_list_item, null, {
                          default: withCtx(() => [
                            createVNode("strong", null, "Functionality Cookies"),
                            createTextVNode(": These cookies remember user preferences, improving experience. ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_divider),
                createVNode(_component_v_card_text, null, {
                  default: withCtx(() => [
                    createVNode("h3", { class: "text-h6 font-weight-medium" }, "Your Choices Regarding Cookies"),
                    createVNode("p", null, " You can disable Cookies in your browser settings. If you do not accept Cookies, some features of the Website may not function properly. "),
                    createVNode("p", null, "Instructions for disabling Cookies in popular browsers:"),
                    createVNode(_component_v_list, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_list_item, null, {
                          default: withCtx(() => [
                            createVNode("a", {
                              href: "https://support.google.com/accounts/answer/32050",
                              target: "_blank"
                            }, "Chrome")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_list_item, null, {
                          default: withCtx(() => [
                            createVNode("a", {
                              href: "http://support.microsoft.com/kb/278835",
                              target: "_blank"
                            }, "Internet Explorer")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_list_item, null, {
                          default: withCtx(() => [
                            createVNode("a", {
                              href: "https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored",
                              target: "_blank"
                            }, "Firefox")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_list_item, null, {
                          default: withCtx(() => [
                            createVNode("a", {
                              href: "https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac",
                              target: "_blank"
                            }, "Safari")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_divider),
                createVNode(_component_v_card_text, null, {
                  default: withCtx(() => [
                    createVNode("h3", { class: "text-h6 font-weight-medium" }, "More Information"),
                    createVNode("p", null, [
                      createTextVNode("Learn more about cookies at "),
                      createVNode("a", {
                        href: "https://www.termsfeed.com/blog/cookies/",
                        target: "_blank"
                      }, "TermsFeed"),
                      createTextVNode(".")
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_v_divider),
                createVNode(_component_v_card_text, null, {
                  default: withCtx(() => [
                    createVNode("h3", { class: "text-h6 font-weight-medium" }, "Contact Us"),
                    createVNode("p", null, [
                      createTextVNode(" If you have any questions about this Cookies Policy, contact us via email: "),
                      createVNode("a", { href: "mailto:jeremiahchukwuebukao@gmail.com" }, "jeremiahchukwuebukao@gmail.com")
                    ])
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
          createVNode(_component_v_card, {
            class: "pa-5",
            elevation: "2"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_card_title, { class: "text-h4 font-weight-bold" }, {
                default: withCtx(() => [
                  createTextVNode("Cookies Policy")
                ]),
                _: 1
              }),
              createVNode(_component_v_card_subtitle, null, {
                default: withCtx(() => [
                  createTextVNode("Last updated: March 28, 2025")
                ]),
                _: 1
              }),
              createVNode(_component_v_card_text, null, {
                default: withCtx(() => [
                  createVNode("p", null, [
                    createTextVNode(" This Cookies Policy explains what Cookies are and how We use them. You should read this policy so You can understand what type of cookies We use, or the information We collect using Cookies and how that information is used. This Cookies Policy has been created with the help of the "),
                    createVNode("a", {
                      href: "https://www.termsfeed.com/cookies-policy-generator/",
                      target: "_blank"
                    }, "Cookies Policy Generator"),
                    createTextVNode(". ")
                  ]),
                  createVNode("p", null, " Cookies do not typically contain any information that personally identifies a user, but personal information that we store about You may be linked to the information stored in and obtained from Cookies. For further information on how We use, store and keep your personal data secure, see our Privacy Policy. ")
                ]),
                _: 1
              }),
              createVNode(_component_v_divider),
              createVNode(_component_v_card_text, null, {
                default: withCtx(() => [
                  createVNode("h2", { class: "text-h5 font-weight-bold" }, "Interpretation and Definitions"),
                  createVNode("h3", { class: "text-h6 font-weight-medium" }, "Interpretation"),
                  createVNode("p", null, " The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural. ")
                ]),
                _: 1
              }),
              createVNode(_component_v_divider),
              createVNode(_component_v_card_text, null, {
                default: withCtx(() => [
                  createVNode("h3", { class: "text-h6 font-weight-medium" }, "Definitions"),
                  createVNode(_component_v_list, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_list_item, null, {
                        default: withCtx(() => [
                          createVNode("strong", null, "Company"),
                          createTextVNode(" refers to Asastra Art and Technology, 56B Odogbolu Street, Aguda, Surulere, Lagos. ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_list_item, null, {
                        default: withCtx(() => [
                          createVNode("strong", null, "Cookies"),
                          createTextVNode(" are small files placed on your computer or mobile device to store browsing history and enhance functionality. ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_list_item, null, {
                        default: withCtx(() => [
                          createVNode("strong", null, "Website"),
                          createTextVNode(" refers to Asastra Art and Technology, accessible at "),
                          createVNode("a", {
                            href: "https://asastra.vercel.app",
                            target: "_blank"
                          }, "Asastra Art and Tech"),
                          createTextVNode(". ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_divider),
              createVNode(_component_v_card_text, null, {
                default: withCtx(() => [
                  createVNode("h2", { class: "text-h5 font-weight-bold" }, "The Use of Cookies"),
                  createVNode("h3", { class: "text-h6 font-weight-medium" }, "Types of Cookies We Use"),
                  createVNode("p", null, ' Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on your device, while Session Cookies are deleted as soon as you close your browser. '),
                  createVNode(_component_v_list, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_list_item, null, {
                        default: withCtx(() => [
                          createVNode("strong", null, "Necessary / Essential Cookies"),
                          createTextVNode(": These cookies are required for website functionality and security. ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_list_item, null, {
                        default: withCtx(() => [
                          createVNode("strong", null, "Functionality Cookies"),
                          createTextVNode(": These cookies remember user preferences, improving experience. ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_divider),
              createVNode(_component_v_card_text, null, {
                default: withCtx(() => [
                  createVNode("h3", { class: "text-h6 font-weight-medium" }, "Your Choices Regarding Cookies"),
                  createVNode("p", null, " You can disable Cookies in your browser settings. If you do not accept Cookies, some features of the Website may not function properly. "),
                  createVNode("p", null, "Instructions for disabling Cookies in popular browsers:"),
                  createVNode(_component_v_list, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_list_item, null, {
                        default: withCtx(() => [
                          createVNode("a", {
                            href: "https://support.google.com/accounts/answer/32050",
                            target: "_blank"
                          }, "Chrome")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_list_item, null, {
                        default: withCtx(() => [
                          createVNode("a", {
                            href: "http://support.microsoft.com/kb/278835",
                            target: "_blank"
                          }, "Internet Explorer")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_list_item, null, {
                        default: withCtx(() => [
                          createVNode("a", {
                            href: "https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored",
                            target: "_blank"
                          }, "Firefox")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_list_item, null, {
                        default: withCtx(() => [
                          createVNode("a", {
                            href: "https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac",
                            target: "_blank"
                          }, "Safari")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_divider),
              createVNode(_component_v_card_text, null, {
                default: withCtx(() => [
                  createVNode("h3", { class: "text-h6 font-weight-medium" }, "More Information"),
                  createVNode("p", null, [
                    createTextVNode("Learn more about cookies at "),
                    createVNode("a", {
                      href: "https://www.termsfeed.com/blog/cookies/",
                      target: "_blank"
                    }, "TermsFeed"),
                    createTextVNode(".")
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_v_divider),
              createVNode(_component_v_card_text, null, {
                default: withCtx(() => [
                  createVNode("h3", { class: "text-h6 font-weight-medium" }, "Contact Us"),
                  createVNode("p", null, [
                    createTextVNode(" If you have any questions about this Cookies Policy, contact us via email: "),
                    createVNode("a", { href: "mailto:jeremiahchukwuebukao@gmail.com" }, "jeremiahchukwuebukao@gmail.com")
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/CookiesPolicy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CookiesPolicy = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-379fd3d1"]]);

export { CookiesPolicy as default };
//# sourceMappingURL=CookiesPolicy.vue.mjs.map
