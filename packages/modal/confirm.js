// Copyright (c) 2019 by https://github.com/vannvan.
// All Rights Reserved.
import Vue from 'vue';
import Modal from './src/modal.vue';

const prefixCls = 'wui__modal';

Modal.newInstance = properties => {
    const _props = properties || {};

    const Instance = new Vue({
        data: Object.assign({}, _props, {
            visible: false,
            width: "416",
            title: '',
            body: '',
            modalType:'',
            okText: '确定',
            cancelText: '取消',
            showCancel: false,
            loading: false,
            buttonLoading: false,
            closable: false
        }),
        render (h) {
            let footerVNodes = [];
            if (this.showCancel) {
              footerVNodes.push(h('div', {
                attrs: {
                    class: `${prefixCls}--btn ${prefixCls}--btn--cancel`
                },
                on: {
                    click: this.cancel
                }
              }, this.cancelText));
            }
            footerVNodes.push(h('div', {
                attrs: {
                    class: `${prefixCls}--btn ${prefixCls}--btn--ok ${prefixCls}--btn--${this.modalType}`
                },
                on: {
                    click: this.ok
                }
            }, this.okText));

            // render content
            let body_render;
            if (this.render) {
                body_render = h('div', {
                    attrs: {
                        class: `${prefixCls}--body ${prefixCls}-body-render`
                    }
                }, [this.render(h)]);
            } else {
                body_render = h('div', {
                    attrs: {
                        class: `${prefixCls}--body`
                    }
                }, [
                    h('p', {
                        domProps: {
                            innerHTML: this.body
                        }
                    })
                ]);
            }

            // when render with no title, hide head
            let head_render;
            if (this.title) {
                head_render = h('div', {
                    attrs: {
                        class: `${prefixCls}--header ${prefixCls}--header--${this.modalType}`
                    }
                }, [
                    h('div', {
                        attrs: {
                            class: `${prefixCls}--head--title`
                        },
                        domProps: {
                            innerHTML: this.title
                        }
                    })
                ]);
            }

            return h(Modal, {
                props: Object.assign({}, _props, {
                    width: this.width,
                    closable: this.closable
                }),
                domProps: {
                    value: this.visible
                },
                on: {
                    input: (status) => {
                        this.visible = status;
                    },
                    'on-cancel': this.cancel
                }
            }, [
                h('div', {
                    attrs: {
                        class: prefixCls
                    }
                }, [
                    head_render,
                    body_render,
                    h('div', {
                        attrs: {
                            class: `${prefixCls}--footer ${prefixCls}--footer--${this.modalType}`
                        }
                    }, footerVNodes)
                ])
            ]);
        },
        computed: {

        },
        methods: {
            cancel () {
                this.$children[0].visible = false;
                this.buttonLoading = false;
                this.onCancel();
                this.remove();
            },
            ok () {
                if (this.loading) {
                    this.buttonLoading = true;
                } else {
                    this.$children[0].visible = false;
                    this.remove();
                }
                this.onOk();
            },
            remove () {
                setTimeout(() => {
                    this.destroy();
                }, 300);
            },
            destroy () {
                this.$destroy();
                document.body.removeChild(this.$el);
                this.onRemove();
            },
            onOk () {},
            onCancel () {},
            onRemove () {}
        }
    });

    const component = Instance.$mount();
    document.body.appendChild(component.$el);
    const modal = Instance.$children[0];
    // console.log(modal)
    return {
        show (props) {
            modal.$parent.showCancel = props.showCancel;
            modal.$parent.modalType = props.type;

            if ('width' in props) {
                modal.$parent.width = props.width;
            }

            if ('closable' in props) {
                modal.$parent.closable = props.closable;
            }

            if ('title' in props) {
                modal.$parent.title = props.title;
            }

            if ('content' in props) {
                modal.$parent.body = props.content;
            }

            if ('okText' in props) {
                modal.$parent.okText = props.okText;
            }

            if ('cancelText' in props) {
                modal.$parent.cancelText = props.cancelText;
            }

            if ('onCancel' in props) {
                modal.$parent.onCancel = props.onCancel;
            }

            if ('onOk' in props) {
                modal.$parent.onOk = props.onOk;
            }

            // async for ok
            if ('loading' in props) {
                modal.$parent.loading = props.loading;
            }

            // notice when component destroy
            modal.$parent.onRemove = props.onRemove;

            modal.visible = true;
        },
        remove () {
            modal.visible = false;
            modal.$parent.buttonLoading = false;
            modal.$parent.remove();
        },
        component: modal
    };
};

export default Modal;
