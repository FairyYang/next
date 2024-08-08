import React from 'react';
import Button from '../../button';
import Balloon from '../index';

const defaultTrigger = (
    <span className="triggerSpan" style={{ margin: '5px' }}>
        trigger
    </span>
);

describe('Balloon', () => {
    describe('closable', () => {
        it('closable: true', () => {
            cy.mount(
                <Balloon
                    visible
                    closable
                    type="normal"
                    trigger={defaultTrigger}
                    triggerType="click"
                >
                    i am balloon content
                </Balloon>
            );
            cy.get('.next-balloon-close').should('exist');
        });

        it('closable: false', () => {
            cy.mount(
                <Balloon
                    visible
                    closable={false}
                    type="normal"
                    trigger={defaultTrigger}
                    triggerType="click"
                >
                    i am balloon content
                </Balloon>
            );
            cy.get('.next-balloon-close').should('not.exist');
        });
    });

    describe('safeNode', () => {
        it('safeNode', () => {
            function Demo() {
                return (
                    <div>
                        <button id="safe" className="safeButton">
                            safeButton
                        </button>
                        <Balloon
                            trigger={<span className="balloon">trigger</span>}
                            id="balloon"
                            safeNode="safe"
                            triggerType="click"
                        >
                            i am balloon content
                        </Balloon>
                    </div>
                );
            }
            cy.mount(<Demo />);
            cy.get('.balloon').trigger('click');
            cy.get('.safeButton').trigger('click');
            cy.get('.next-balloon').should('exist');
        });
    });
    describe('type', () => {
        it('type: normal', () => {
            cy.mount(
                <Balloon
                    visible
                    closable={false}
                    type="normal"
                    trigger={defaultTrigger}
                    triggerType="click"
                >
                    i am balloon content
                </Balloon>
            );
            cy.get('.next-balloon-normal').should('exist');
        });
        it('type: primary', () => {
            cy.mount(
                <Balloon
                    visible
                    closable={false}
                    type="primary"
                    trigger={defaultTrigger}
                    triggerType="click"
                >
                    i am balloon content
                </Balloon>
            );
            cy.get('.next-balloon-primary').should('exist');
        });
    });
    describe('trigger ,triggerType', () => {
        it('should has the trigger element', () => {
            cy.mount(
                <Balloon
                    closable={false}
                    type="normal"
                    trigger={defaultTrigger}
                    triggerType="click"
                >
                    i am balloon content
                </Balloon>
            );

            cy.get('.triggerSpan').should('have.text', 'trigger');
        });
        it('triggerType can set click', () => {
            cy.mount(
                <Balloon
                    closable={false}
                    type="normal"
                    trigger={defaultTrigger}
                    triggerType="click"
                >
                    i am balloon content
                </Balloon>
            );
            cy.get('span').trigger('click');
            cy.get('.next-balloon').should('exist');
        });

        it('triggerType can set hover', () => {
            cy.mount(
                <Balloon
                    closable={false}
                    type="normal"
                    trigger={defaultTrigger}
                    triggerType="hover"
                >
                    i am balloon content
                </Balloon>
            );
            cy.get('span').trigger('mouseenter');
            cy.get('.next-balloon').should('exist');
        });

        // it('trigger is disabled button, hover enter and leave, popup should resolve',  () => {
        //     defaultWrapper.setProps({
        //         trigger: (
        //             <Button disabled id="balloon-btn" style={{ color: 'red' }}>
        //                 button
        //             </Button>
        //         ),
        //         triggerType: 'hover',
        //     });
        //     // hover on the <span> which is specially added for disabled pattern
        //     defaultWrapper.find('span').at(0).simulate('mouseenter');
        //     await delay(500);
        //     defaultWrapper.update();
        //     assert(document.querySelector('.next-balloon') !== null);

        //     defaultWrapper.find('span').at(0).simulate('mouseleave');
        //     await delay(600);
        //     defaultWrapper.update();
        //     assert(document.querySelector('.next-balloon') === null);
        // });

        it('trigger can be string', () => {
            cy.mount(
                <Balloon closable={false} type="normal" trigger="trigger" triggerType="hover">
                    i am balloon content
                </Balloon>
            );
            cy.get('span').trigger('mouseenter');
            cy.get('.next-balloon').should('exist');
        });

        // trigger 不传，默认用空的<span></span>填充
        it('trigger default is span', () => {
            cy.mount(<Balloon triggerType="click">trigger</Balloon>);
            cy.get('span').should('have.length', 1);
        });
    });

    describe('align', () => {
        it('balloon align', () => {
            cy.mount(
                <Balloon trigger={<span>trigger</span>} align="t" triggerType="click">
                    i am balloon content
                </Balloon>
            );
            cy.get('span').trigger('click');
            cy.get('.next-balloon-bottom').should('exist');

            cy.mount(
                <Balloon trigger={<span>trigger</span>} align="tl" triggerType="click">
                    i am balloon content
                </Balloon>
            );
            cy.get('span').trigger('click');
            cy.get('.next-balloon-bottom-right').should('exist');

            cy.mount(
                <Balloon trigger={<span>trigger</span>} align="tr" triggerType="click">
                    i am balloon content
                </Balloon>
            );
            cy.get('span').trigger('click');
            cy.get('.next-balloon-bottom-left').should('exist');

            //bottom
            cy.mount(
                <Balloon trigger={<span>trigger</span>} align="b" triggerType="click">
                    i am balloon content
                </Balloon>
            );
            cy.get('span').trigger('click');
            cy.get('.next-balloon-top').should('exist');

            cy.mount(
                <Balloon trigger={<span>trigger</span>} align="bl" triggerType="click">
                    i am balloon content
                </Balloon>
            );
            cy.get('span').trigger('click');
            cy.get('.next-balloon-top-right').should('exist');

            cy.mount(
                <Balloon trigger={<span>trigger</span>} align="br" triggerType="click">
                    i am balloon content
                </Balloon>
            );
            cy.get('span').trigger('click');
            cy.get('.next-balloon-top-left').should('exist');

            //left
            cy.mount(
                <Balloon trigger={<span>trigger</span>} align="l" triggerType="click">
                    i am balloon content
                </Balloon>
            );
            cy.get('span').trigger('click');
            cy.get('.next-balloon-right').should('exist');

            cy.mount(
                <Balloon trigger={<span>trigger</span>} align="lt" triggerType="click">
                    i am balloon content
                </Balloon>
            );
            cy.get('span').trigger('click');
            cy.get('.next-balloon-right-bottom').should('exist');

            cy.mount(
                <Balloon trigger={<span>trigger</span>} align="lb" triggerType="click">
                    i am balloon content
                </Balloon>
            );
            cy.get('span').trigger('click');
            cy.get('.next-balloon-right-top').should('exist');

            //right
            cy.mount(
                <Balloon trigger={<span>trigger</span>} align="r" triggerType="click">
                    i am balloon content
                </Balloon>
            );
            cy.get('span').trigger('click');
            cy.get('.next-balloon-left').should('exist');

            cy.mount(
                <Balloon trigger={<span>trigger</span>} align="rt" triggerType="click">
                    i am balloon content
                </Balloon>
            );
            cy.get('span').trigger('click');
            cy.get('.next-balloon-left-bottom').should('exist');

            cy.mount(
                <Balloon trigger={<span>trigger</span>} align="rb" triggerType="click">
                    i am balloon content
                </Balloon>
            );
            cy.get('span').trigger('click');
            cy.get('.next-balloon-left-top').should('exist');
        });
    });
});

describe('Balloon onClose ComponentWillReceiveProps closeIcon', () => {
    it('onClose ComponentWillReceiveProps closeIcon', () => {
        interface AppProps {}
        class App extends React.Component<AppProps, { visible: boolean }> {
            constructor(props: AppProps) {
                super(props);
                this.state = {
                    visible: false,
                };
            }

            hide() {
                this.setState({
                    visible: false,
                });
            }
            handleVisibleChange(visible: boolean) {
                this.setState({ visible });
            }

            onClose() {}

            afterClose() {}

            render() {
                const visibleTrigger = (
                    <Button className="trigger-btn" type="primary">
                        点击弹出卡片
                    </Button>
                );

                const content = (
                    <div>
                        点击按钮操作
                        <br />
                        <a style={{ right: 0 }} onClick={this.hide.bind(this)}>
                            确认
                        </a>
                        <a style={{ marginLeft: '4px' }} onClick={this.hide.bind(this)}>
                            关闭
                        </a>
                    </div>
                );
                return (
                    <div>
                        <Balloon
                            trigger={visibleTrigger}
                            triggerType="click"
                            visible={this.state.visible}
                            onVisibleChange={this.handleVisibleChange.bind(this)}
                            afterClose={this.afterClose.bind(this)}
                            onClose={this.onClose.bind(this)}
                        >
                            {content}
                        </Balloon>
                    </div>
                );
            }
        }
        cy.mount(<App />);
        cy.get('button').trigger('click');
        cy.get('.next-balloon').should('exist');
        cy.get('.next-balloon-close').trigger('click');
        cy.get('.next-balloon').should('not.exist');
    });
});

describe('balloon delay', () => {
    it('add mouseEnterDelay and mouseLeaveDelay, with higher priority than delay.', () => {
        cy.mount(
            <Balloon
                trigger={<div>trigger1111111</div>}
                delay={500}
                mouseEnterDelay={1000}
                mouseLeaveDelay={1000}
                triggerType="hover"
            >
                trigger
            </Balloon>
        );

        cy.get('div').trigger('mouseenter');

        cy.wait(500);
        cy.get('.next-balloon').should('not.exist');

        cy.wait(550);
        cy.get('.next-balloon').should('exist');

        cy.get('div').trigger('mouseleave');

        cy.wait(550);
        cy.get('.next-balloon').should('exist');

        cy.wait(1000);
        cy.get('.next-balloon').should('not.exist');
    });
});
