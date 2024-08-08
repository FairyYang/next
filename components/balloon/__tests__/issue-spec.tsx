import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import Balloon from '../index';

// function wait(duration) {
//     return new Promise(resolve => {
//         setTimeout(resolve, duration);
//     });
// }

describe('Balloon issues', function () {
    describe('https://github.com/alibaba-fusion/next/issues/4137', function () {
        it('autoAdjust when in the fixed box and followTrigger=true', function () {
            cy.mount(
                <div>
                    <div style={{ position: 'fixed', bottom: 0, left: 10 }}>
                        <Balloon
                            v2
                            triggerType="click"
                            title="Balloon Title"
                            trigger={<button className="trigger">trigger</button>}
                            align="t"
                            followTrigger
                            animation={false}
                        >
                            long overlay content,long overlay content,long overlay content,long
                            overlay content,long overlay content,long overlay content,long overlay
                            content
                        </Balloon>
                    </div>
                </div>
            );
            cy.get('.trigger').trigger('click');
            cy.get('.next-balloon').should('exist');

            cy.get('.next-balloon')
                .should('exist')
                .then($overlay => {
                    const rect = $overlay[0].getBoundingClientRect();

                    expect(rect.left > 0);
                    cy.get('.trigger').then($trigger => {
                        const triggerRect = $trigger[0].getBoundingClientRect();
                        expect(
                            rect.top + rect.height + triggerRect.height <
                                document.documentElement.clientHeight
                        );
                    });
                });
        });
        it('autoAdjust when in the fixed box and followTrigger=false', function () {
            const rootNode = document.createElement('div');
            document.body.appendChild(rootNode);
            const overlayClassName = `overlay-${Math.random().toString(36).slice(2)}`;
            cy.mount(
                <div>
                    <div style={{ position: 'fixed', bottom: 0, left: 10 }}>
                        <Balloon
                            v2
                            triggerType="click"
                            title="Balloon Title"
                            trigger={<button className="trigger">trigger</button>}
                            align="t"
                            popupClassName={overlayClassName}
                            animation={false}
                        >
                            long overlay content,long overlay content,long overlay content,long
                            overlay content,long overlay content,long overlay content,long overlay
                            content
                        </Balloon>
                    </div>
                </div>
            );

            cy.get('.trigger').trigger('click');
            cy.get(`.${overlayClassName}.next-balloon-bottom-left`).should('exist');
        });
    });
});
