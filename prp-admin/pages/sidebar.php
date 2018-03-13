<ul class="sidebar-menu" data-widget="tree">
	<li class="<?php if ($_GET['show'] == 'home'){ echo "active"; }?>">
		<a href="?show=home">
			<i class="fa fa-home"></i> <span>Home</span>
			<span class="pull-right-container"></span>
		</a>
	</li>
	<li class="<?php if ($_GET['show'] == 'filemanager'){ echo "active"; }?>">
		<a href="?show=filemanager">
			<i class="fa fa-tasks"></i> <span>File Manager</span>
			<span class="pull-right-container"></span>
		</a>
	</li>
	<li class="<?php if ($_GET['show'] == 'downloadreport'){ echo "active"; }?>">
		<a href="?show=downloadreport">
			<i class="fa fa-file-text"></i> <span>Download Report</span>
			<span class="pull-right-container"></span>
		</a>
	</li>
</ul>
<script>
  $(document).ready(function () {
    $('.sidebar-menu').tree()
  })
</script>