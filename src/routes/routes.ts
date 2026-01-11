/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import type { TsoaRoute } from '@tsoa/runtime';
import {  fetchMiddlewares, ExpressTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { WelcomeController } from './../controllers/welcome-controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { StoreUserController } from './../controllers/store-user-controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { PasswordResetController } from './../controllers/password-reset-controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { EmailVerificationController } from './../controllers/email-verification-controller';
import type { Request as ExRequest, Response as ExResponse, RequestHandler, Router } from 'express';



// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "EmailResponse": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"subject":{"dataType":"string","required":true},"recipientEmail":{"dataType":"string","required":true},"content":{"dataType":"string","required":true},"status":{"dataType":"double","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "WelcomeResponse": {
        "dataType": "refAlias",
        "type": {"dataType":"intersection","subSchemas":[{"ref":"EmailResponse"},{"dataType":"nestedObjectLiteral","nestedProperties":{"fullName":{"dataType":"string","required":true}}}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "EmailRequest": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"recipientEmail":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "WelcomeRequest": {
        "dataType": "refAlias",
        "type": {"dataType":"intersection","subSchemas":[{"ref":"EmailRequest"},{"dataType":"nestedObjectLiteral","nestedProperties":{"fullName":{"dataType":"string","required":true}}}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "JoinStoreInviteResponse": {
        "dataType": "refAlias",
        "type": {"dataType":"intersection","subSchemas":[{"ref":"EmailResponse"},{"dataType":"nestedObjectLiteral","nestedProperties":{"decline":{"dataType":"string","required":true},"accept":{"dataType":"string","required":true},"inviter":{"dataType":"string","required":true},"invitee":{"dataType":"string","required":true},"role":{"dataType":"string","required":true},"storeLogo":{"dataType":"string","required":true},"storeSlug":{"dataType":"string","required":true},"store":{"dataType":"string","required":true}}}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "JoinStoreInviteRequest": {
        "dataType": "refAlias",
        "type": {"dataType":"intersection","subSchemas":[{"ref":"EmailRequest"},{"dataType":"nestedObjectLiteral","nestedProperties":{"decline":{"dataType":"string","required":true},"accept":{"dataType":"string","required":true},"inviter":{"dataType":"string","required":true},"invitee":{"dataType":"string","required":true},"role":{"dataType":"string","required":true},"storeLogo":{"dataType":"string","required":true},"storeSlug":{"dataType":"string","required":true},"store":{"dataType":"string","required":true}}}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PasswordResetResponse": {
        "dataType": "refAlias",
        "type": {"dataType":"intersection","subSchemas":[{"ref":"EmailResponse"},{"dataType":"nestedObjectLiteral","nestedProperties":{"avatarUrl":{"dataType":"string"},"fullName":{"dataType":"string","required":true},"code":{"dataType":"string","required":true}}}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PasswordResetRequest": {
        "dataType": "refAlias",
        "type": {"dataType":"intersection","subSchemas":[{"ref":"EmailRequest"},{"dataType":"nestedObjectLiteral","nestedProperties":{"avatarUrl":{"dataType":"string"},"fullName":{"dataType":"string","required":true},"code":{"dataType":"string","required":true}}}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "EmailVerificationResponse": {
        "dataType": "refAlias",
        "type": {"dataType":"intersection","subSchemas":[{"ref":"EmailResponse"},{"dataType":"nestedObjectLiteral","nestedProperties":{"name":{"dataType":"string","required":true},"code":{"dataType":"string","required":true}}}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "EmailVerificationRequest": {
        "dataType": "refAlias",
        "type": {"dataType":"intersection","subSchemas":[{"ref":"EmailRequest"},{"dataType":"nestedObjectLiteral","nestedProperties":{"name":{"dataType":"string","required":true},"code":{"dataType":"string","required":true}}}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new ExpressTemplateService(models, {"noImplicitAdditionalProperties":"throw-on-extras","bodyCoercion":true});

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa




export function RegisterRoutes(app: Router) {

    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################


    
        const argsWelcomeController_sendWelcomeEmail: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"ref":"WelcomeRequest"},
        };
        app.post('/welcome',
            ...(fetchMiddlewares<RequestHandler>(WelcomeController)),
            ...(fetchMiddlewares<RequestHandler>(WelcomeController.prototype.sendWelcomeEmail)),

            async function WelcomeController_sendWelcomeEmail(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsWelcomeController_sendWelcomeEmail, request, response });

                const controller = new WelcomeController();

              await templateService.apiHandler({
                methodName: 'sendWelcomeEmail',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsStoreUserController_sendJoinStoreRequestEmail: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"ref":"JoinStoreInviteRequest"},
        };
        app.post('/store-user/send-join-store-request-email',
            ...(fetchMiddlewares<RequestHandler>(StoreUserController)),
            ...(fetchMiddlewares<RequestHandler>(StoreUserController.prototype.sendJoinStoreRequestEmail)),

            async function StoreUserController_sendJoinStoreRequestEmail(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsStoreUserController_sendJoinStoreRequestEmail, request, response });

                const controller = new StoreUserController();

              await templateService.apiHandler({
                methodName: 'sendJoinStoreRequestEmail',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsPasswordResetController_sendPasswordResetCode: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"ref":"PasswordResetRequest"},
        };
        app.post('/password-reset',
            ...(fetchMiddlewares<RequestHandler>(PasswordResetController)),
            ...(fetchMiddlewares<RequestHandler>(PasswordResetController.prototype.sendPasswordResetCode)),

            async function PasswordResetController_sendPasswordResetCode(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsPasswordResetController_sendPasswordResetCode, request, response });

                const controller = new PasswordResetController();

              await templateService.apiHandler({
                methodName: 'sendPasswordResetCode',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsEmailVerificationController_sendEmailVerificationCode: Record<string, TsoaRoute.ParameterSchema> = {
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"EmailVerificationRequest"},
        };
        app.post('/email-verification',
            ...(fetchMiddlewares<RequestHandler>(EmailVerificationController)),
            ...(fetchMiddlewares<RequestHandler>(EmailVerificationController.prototype.sendEmailVerificationCode)),

            async function EmailVerificationController_sendEmailVerificationCode(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsEmailVerificationController_sendEmailVerificationCode, request, response });

                const controller = new EmailVerificationController();

              await templateService.apiHandler({
                methodName: 'sendEmailVerificationCode',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
