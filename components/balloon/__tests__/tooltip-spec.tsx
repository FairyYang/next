import React from 'react';
import Button from '../../button';
import Balloon from '../index';

const Tooltip = Balloon.Tooltip;
const trigger = (
    <span className="trigger" onMouseEnter={() => {}}>
        xiachi
    </span>
);
describe('Tooltip', () => {
    // trigger 不传，默认用空的<span></span>填充
    it('trigger default is span', () => {
        cy.mount(<Tooltip>test</Tooltip>);
        cy.get('span').should('have.length', 1);
    });

    // it('tooltip should trigger on hover', (done) => {
    //     defaultWrapper.find('.trigger').simulate('mouseenter');
    //     // setTimeout(function() {
    //     assert(document.querySelector('.next-balloon-tooltip') !== null);
    //         // done();
    //     // }, 500);
    // });
    it('tooltip should have the trigger element', () => {
        cy.mount(
            <Tooltip trigger={trigger} triggerType="hover">
                i am tooltip content
            </Tooltip>
        );
        cy.get('.trigger').should('have.text', 'xiachi');
    });

    it('text not string should throw an error', () => {
        try {
            cy.mount(
                // @ts-expect-error 此处需要测试错误传参情况
                <Tooltip trigger={trigger} text={2} triggerType="hover">
                    i am tooltip content
                </Tooltip>
            );
        } catch (e) {
            expect(e instanceof Error);
        }
    });

    it('trigger is disabled button, hover enter and leave, popup should resolve', () => {
        cy.mount(
            <Tooltip
                trigger={
                    <Button disabled id="balloon-btn" style={{ color: 'red', display: 'inline' }}>
                        button
                    </Button>
                }
                triggerType="hover"
            >
                i am tooltip content
            </Tooltip>
        );
        cy.get('span').trigger('mouseenter');
        setTimeout(function () {
            cy.get('.next-balloon-tooltip').should('exist');
            cy.get('span').trigger('mouseleave');

            setTimeout(function () {
                cy.get('.next-balloon-tooltip').should('not.exist');
            }, 600);
        }, 300);
    });

    it('trigger can be string', () => {
        cy.mount(
            <Tooltip trigger="trigger" triggerType="hover">
                i am tooltip content
            </Tooltip>
        );
        cy.get('span').trigger('mouseenter');
        setTimeout(function () {
            cy.get('.next-balloon-tooltip').should('exist');
        }, 300);
    });

    it('add mouseEnterDelay and mouseLeaveDelay, with higher priority than delay.', () => {
        cy.mount(
            <Tooltip
                trigger={<div className="trigger">trigger1111111</div>}
                delay={500}
                mouseEnterDelay={1000}
                mouseLeaveDelay={1000}
            >
                test
            </Tooltip>
        );
        cy.get('.trigger').trigger('mouseenter');
        setTimeout(function () {
            cy.get('.next-balloon-tooltip').should('not.exist');
        }, 500);
        setTimeout(function () {
            cy.get('.next-balloon-tooltip').should('exist');
        }, 550);

        cy.get('.trigger').trigger('mouseleave');
        setTimeout(function () {
            cy.get('.next-balloon-tooltip').should('exist');
        }, 500);
        setTimeout(function () {
            cy.get('.next-balloon-tooltip').should('not.exist');
        }, 1000);
    });
});
