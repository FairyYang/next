import React from 'react';
import Balloon from '../index';

const defaultTrigger = (
    <span className="triggerSpan" style={{ margin: '5px' }}>
        trigger
    </span>
);

describe('Balloon v2', () => {
    describe('closable', () => {
        it('closable: true', () => {
            cy.mount(
                <Balloon
                    visible
                    closable
                    type="normal"
                    trigger={defaultTrigger}
                    triggerType="click"
                    v2
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
                    v2
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
                            v2
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
                    v2
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
                    v2
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
                    v2
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
                    v2
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
                    v2
                >
                    i am balloon content
                </Balloon>
            );
            cy.get('span').trigger('mouseenter');
            cy.get('.next-balloon').should('exist');
        });

        it('trigger can be string', () => {
            cy.mount(
                <Balloon v2 closable={false} type="normal" trigger="trigger" triggerType="hover">
                    i am balloon content
                </Balloon>
            );
            cy.get('span').trigger('mouseenter');
            cy.get('.next-balloon').should('exist');
        });

        // trigger 不传，默认用空的<span></span>填充
        it('trigger default is span', () => {
            cy.mount(
                <Balloon v2 triggerType="click">
                    trigger
                </Balloon>
            );
            cy.get('span').should('have.length', 1);
        });
    });
});

describe('balloon v2', () => {
    it('balloon align', () => {
        cy.mount(
            <Balloon v2 trigger={<span>trigger</span>} align="t" triggerType="click">
                i am balloon content
            </Balloon>
        );
        cy.get('span').trigger('click');
        cy.get('.next-balloon-bottom').should('exist');

        cy.mount(
            <Balloon v2 trigger={<span>trigger</span>} align="tl" triggerType="click">
                i am balloon content
            </Balloon>
        );
        cy.get('span').trigger('click');
        cy.get('.next-balloon-bottom-left').should('exist');

        cy.mount(
            <Balloon v2 trigger={<span>trigger</span>} align="tr" triggerType="click">
                i am balloon content
            </Balloon>
        );
        cy.get('span').trigger('click');
        cy.get('.next-balloon-bottom-right').should('exist');

        //bottom
        cy.mount(
            <Balloon v2 trigger={<span>trigger</span>} align="b" triggerType="click">
                i am balloon content
            </Balloon>
        );
        cy.get('span').trigger('click');
        cy.get('.next-balloon-top').should('exist');

        cy.mount(
            <Balloon v2 trigger={<span>trigger</span>} align="bl" triggerType="click">
                i am balloon content
            </Balloon>
        );
        cy.get('span').trigger('click');
        cy.get('.next-balloon-top-left').should('exist');

        cy.mount(
            <Balloon v2 trigger={<span>trigger</span>} align="br" triggerType="click">
                i am balloon content
            </Balloon>
        );
        cy.get('span').trigger('click');
        cy.get('.next-balloon-top-right').should('exist');

        //left
        cy.mount(
            <Balloon v2 trigger={<span>trigger</span>} align="l" triggerType="click">
                i am balloon content
            </Balloon>
        );
        cy.get('span').trigger('click');
        cy.get('.next-balloon-right').should('exist');

        cy.mount(
            <Balloon v2 trigger={<span>trigger</span>} align="lt" triggerType="click">
                i am balloon content
            </Balloon>
        );
        cy.get('span').trigger('click');
        cy.get('.next-balloon-right-top').should('exist');

        cy.mount(
            <Balloon v2 trigger={<span>trigger</span>} align="lb" triggerType="click">
                i am balloon content
            </Balloon>
        );
        cy.get('span').trigger('click');
        cy.get('.next-balloon-right-bottom').should('exist');

        //right
        cy.mount(
            <Balloon v2 trigger={<span>trigger</span>} align="r" triggerType="click">
                i am balloon content
            </Balloon>
        );
        cy.get('span').trigger('click');
        cy.get('.next-balloon-left').should('exist');

        cy.mount(
            <Balloon v2 trigger={<span>trigger</span>} align="rt" triggerType="click">
                i am balloon content
            </Balloon>
        );
        cy.get('span').trigger('click');
        cy.get('.next-balloon-left-top').should('exist');

        cy.mount(
            <Balloon v2 trigger={<span>trigger</span>} align="rb" triggerType="click">
                i am balloon content
            </Balloon>
        );
        cy.get('span').trigger('click');
        cy.get('.next-balloon-left-bottom').should('exist');
    });

    it('onClose shuld be called with closeIcon', () => {
        const onClose = cy.spy().as('onClose');
        cy.mount(
            <Balloon
                v2
                trigger={<button>trigger</button>}
                align="rb"
                triggerType="click"
                onClose={onClose}
            >
                i am balloon content
            </Balloon>
        );
        cy.get('button').trigger('click');
        cy.get('.next-balloon').should('exist');

        cy.get('.next-balloon-close').trigger('click');
        expect(onClose.calledOnce);
    });
});
