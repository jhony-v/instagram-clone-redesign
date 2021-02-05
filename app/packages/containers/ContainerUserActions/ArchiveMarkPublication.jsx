import React, { useState } from 'react'
import BaseIconActivation from '@components/common/BaseIconActivation'
import Icons from '@icons/Icons'

export default function ArchiveMarkPublication() {
    const [ archived,setArchived] = useState(false);
    return (
       <BaseIconActivation icon={Icons.Bookmark} active={archived} onClick={() => setArchived(state => !state)} />
    )
}
