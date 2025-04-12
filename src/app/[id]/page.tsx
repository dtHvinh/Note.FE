'use client'

import MyBubbleMenu from '@/components/text-editor/MyBubbleMenu';
import { BubbleMenu, EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Placeholder } from 'novel';
import { use } from "react";
import useSWR from "swr";
export interface Document {
    id: string;
    title: string;
    content: string;
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function DocumentDetails({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const [_, documentId] = id.split('-');
    const { data: existDocumentDetail } = useSWR<Document>(id.split('-').length == 2 ? `/api/document/${documentId}` : null, fetcher)

    const editor = useEditor({
        extensions: [
            StarterKit,
            Placeholder.configure({
                placeholder: ({ node }) => {
                    if (node.type.name === 'heading') {
                        return 'What’s the title?'
                    }

                    return 'Write something...'
                },
                emptyEditorClass: 'is-editor-empty',
            }),
        ],
        editable: true,
        autofocus: true,
        immediatelyRender: false,
        onUpdate: ({ editor }) => {
            let content = editor.getHTML();
            const json = editor.getJSON().content;

            if (Array.isArray(json) && json.length === 1 && !json[0].hasOwnProperty("content")) {
                content = "";
            }
        },
    });

    return (
        <div className="pt-5 mx-24 focus-within:outline-0">
            <EditorContent spellCheck={false} editor={editor} />
            <BubbleMenu editor={editor}>
                <MyBubbleMenu editor={editor} />
            </BubbleMenu>
        </div>
    )
}