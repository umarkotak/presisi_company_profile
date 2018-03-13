<div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
        <h4 class="modal-title" id="uploadFileLabel">Upload File</h4>
      </div>
      <div class="modal-body">
        <form action="filemanager/uploadfileprocess.php" name="modal_popup" enctype="multipart/form-data" method="POST">
          <div class="box-body">
            <div class="form-group">
              <label for="filename">Filename</label>
              <input type="text" name="filename" class="form-control" placeholder="Filename" required>
            </div>
            <div class="form-group">
              <label for="labelname">Label</label>
              <input type="text" name="labelname" placeholder="Label name shown on website" class="form-control" required>
            </div>
            <div class="form-group">
              <label for="fileup">Choose File</label>
              <input type="file" name="fileup" class="form-control" required>
            </div>
          </div>
          <div class="modal-footer clearfix">
            <button class="btn btn-primary" type="submit">
            <i class="fa fa-upload"></i> Upload</button>
            <button type="reset" class="btn btn-danger"  data-dismiss="modal" aria-hidden="true">
            <i class="fa fa-close"></i> Close</button>
          </div>
        </form>
      </div>
    </div>
</div>