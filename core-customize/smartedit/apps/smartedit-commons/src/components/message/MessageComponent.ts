/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 */
import { Component, Input } from '@angular/core';

import { SeDowngradeComponent } from '../../di';

/**
 *  This component provides contextual feedback messages for the user actions. To provide title and description for the se-essage
 *  use transcluded elements: se-message-title and se-message-description.
 *
 *  ### Example
 *
 *      <se-message>
 *          <div se-message-title>Title</div>
 *          <div se-message-description>Description</div>
 *      </se-message>
 */
@SeDowngradeComponent()
@Component({
    selector: 'se-message',
    template: `
        <div
            [attr.message-id]="messageId"
            class="fd-alert se-y-message"
            role="alert"
            [ngClass]="classes"
        >
            <div class="y-message-text">
                <div class="y-message-info-title">
                    <ng-content select="[se-message-title]"></ng-content>
                </div>
                <div class="y-message-info-description">
                    <ng-content select="[se-message-description]"></ng-content>
                </div>
            </div>
        </div>
    `
})
export class MessageComponent {
    /**
     * Id for the component
     */
    @Input() messageId: string;

    /**
     * The type of the component (danger, info, success, warning). Default: info
     */
    @Input() type: string;

    public classes: string;

    ngOnInit(): void {
        this.messageId = this.messageId || 'y-message-default-id';
        switch (this.type) {
            case 'danger':
                this.classes = 'fd-alert--error';
                break;
            case 'info':
                this.classes = 'fd-alert--information';
                break;
            case 'success':
                this.classes = 'fd-alert--success';
                break;
            case 'warning':
                this.classes = 'fd-alert--warning';
                break;
            default:
                this.classes = 'fd-alert--information';
        }
    }
}
