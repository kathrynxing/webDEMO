<form enctype="multipart/form-data" action="http://localhost:3000/upload?upload_progress_id=12344" method="POST">
    <input type="hidden" name="MAX_FILE_SIZE" value="100000" />
    Choose a file to upload: <input name="uploadedfile" type="file" /><br />
    <input type="submit" value="Upload File" />
</form>

// https://stackoverflow.com/questions/8659808/how-does-http-file-upload-work?answertab=active#tab-top