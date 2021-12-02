

const booksFields = {
	id: { type: 'id', label: 'ID' },
title: { type: 'string', label: 'Title',

    },
author: { type: 'relation_one', label: 'Author',

    },
tags: { type: 'relation_many', label: 'Tags',

    },

}

export default booksFields;
