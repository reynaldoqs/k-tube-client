export type Video = {
    readonly kind: string;
    readonly etag: string;
    readonly id: IdData;
};

type IdData = {
    readonly kind: string;
    readonly videoId: string;
    readonly channelId?: string;
    readonly playerId?: string;
};
