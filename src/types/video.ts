export type Video = {
    readonly kind: string;
    readonly etag: string;
    readonly id: IdData;
    readonly snippet: SnippetData;
};

type IdData = {
    readonly kind: string;
    readonly videoId: string;
    readonly channelId?: string;
    readonly playerId?: string;
};

type SnippetData = {
    readonly publishedAt: Date;
    readonly channelId: string;
    readonly title: string;
    readonly description: string;
    readonly thumbnails: ThumbnailsData;
    readonly channelTitle: string;
};

type ThumbnailsData = {
    readonly key: KeyData;
};

type KeyData = {
    readonly url: string;
    readonly width: number;
    readonly height: number;
    readonly extra: string;
};
