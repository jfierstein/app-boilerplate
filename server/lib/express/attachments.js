const attachmentService = require('business/services/attachmentService');

const process = async (req, res, next) => {
    let attachmentUpdatesJson = req.body.attachmentUpdates;
    let attachmentDeletesJson = req.body.attachmentDeletes;
    const attachmentUpdates = JSON.parse(attachmentUpdatesJson);
    const attachmentDeletes = JSON.parse(attachmentDeletesJson);
    if(req.files && req.files.length) {
        const attachmentSaves = [];
        const uploadedFiles = req.files.map((upload, i) => { 
        return {
            storageKey: upload.key,
            fileName: upload.originalname,
            mimeType: upload.mimeType,
            url: upload.location,
            isEmailLogo: req.isEmailLogo,
            public: upload.acl === 'public-read'
        } });
        uploadedFiles.forEach(attachment => {
            delete attachment._id;
            attachmentSaves.push(attachmentService.create(attachment))
        });
        attachments = await Promise.all(attachmentSaves);
        req.attachments = attachments;
    }
    //handle name updates
    if(attachmentUpdates && Object.values(attachmentUpdates).length) {
        const updates = [];
        Object.values(attachmentUpdates).forEach(attachmentUpdate => {
            if(!attachmentUpdate._id.startsWith('new'))
                updates.push(attachmentService.updateName(attachmentUpdate._id, attachmentUpdate.name));
        });
        await Promise.all(updates);
    }
    //handle deletes
    if(attachmentDeletes && Object.values(attachmentDeletes).length) {
        const removes = [];
        Object.values(attachmentDeletes).forEach(attachmentDelete => {
            removes.push(attachmentService.remove(attachmentDelete.id));
        });
        await Promise.all(removes);
    }
    next();
}

module.exports = {
    process
}