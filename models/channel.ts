export class Channel {
    accountId: string;
    avatar: string;
    channelId: string;
    createAt: any;
    description: string;
    followCount: number;
    name: string;
    status: string;
    constructor(data: any = {}) {
      this.accountId = data.accountId || '';
      this.avatar = data.avatar || '';
      this.channelId = data.channelId || '';
      this.description = data.channelId || '';
      this.name = data.name || '';
      this.createAt = data.createAt || new Date();
      this.followCount = data.followCount || 0;
      this.status = data.status || 'Active'; //Approved,Disapproved
    }
  }
  