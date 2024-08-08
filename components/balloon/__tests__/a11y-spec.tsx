import React from 'react';
import Balloon from '../index';
import '../style';
import { test, testReact, createContainer } from '../../util/__tests__/a11y/validate';

describe('Balloon A11y', () => {
    it('should not have any violations', async () => {
        const portalContainer = createContainer('a11y-portal-id1');
        await testReact(
            <Balloon id="balloon-1" visible popupContainer={'a11y-portal-id1'}>
                I am balloon content
            </Balloon>
        );
        return test(portalContainer);
    });

    it('should not have any violations when not closable', async () => {
        const portalContainer = createContainer('a11y-portal-id2');
        await testReact(
            <Balloon id="balloon-2" visible closable={false} popupContainer={'a11y-portal-id2'}>
                I am balloon content
            </Balloon>
        );

        return test(portalContainer);
    });

    it('should not have any violations when Tooltip', async () => {
        const portalContainer = createContainer('a11y-portal-id3');

        await testReact(
            <Balloon.Tooltip id="tooltip-1" visible popupContainer={'a11y-portal-id3'}>
                I am balloon content
            </Balloon.Tooltip>
        );
        return test(portalContainer);
    });
});
