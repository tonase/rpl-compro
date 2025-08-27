interface ITrackRecordItem {
  awards_received_total: string;
  packages_carried_total: string;
  awards_received: string;
  packages_carried: string;
}

class TrackRecordItem {
  awardsReceivedTotal?: string;
  packagesCarriedTotal?: string;
  awardsReceived?: string;
  packagesCarried?: string;

  constructor(data: Partial<ITrackRecordItem>) {
    this.awardsReceivedTotal = data.awards_received_total;
    this.packagesCarriedTotal = data.packages_carried_total;
    this.awardsReceived = data.awards_received;
    this.packagesCarried = data.packages_carried;
  }

  toJSON() {
    return this;
  }
}

export { type ITrackRecordItem, TrackRecordItem };
