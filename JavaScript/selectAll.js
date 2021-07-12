function selectAll(selectAll) {
	const checkboxes = document.getElementsByName('fregister');
	checkboxes.forEach(checkbox) => {
		checkbox.checked = selectAll.checked;
	}
}

// <label><input type="checkbox" name="fregister" id="fregister01"/>동의 1번</label>
// <label><input type="checkbox" name="fregister" id="fregister02"/>동의 2번</label> 
// <label><input type="checkbox" name="selectall" onclick="selectAll(this)"/>모두 동의</label>