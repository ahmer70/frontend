import React from 'react'
import { removeFounder } from '../../redux/actions/founderActions'
import { connect } from 'react-redux'
const DeleteModal = ({ removeFounder, Del, refresh }) => {

  const remove = async () => {
    await removeFounder({ _id: Del })
    await refresh()
  }
  return (
    <div>


      <div class="modal fade" id="deletemodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-sm">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Delete Founder</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              Are you sure you want to remove founder?
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={remove}>Confirm</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(null, { removeFounder })(DeleteModal)