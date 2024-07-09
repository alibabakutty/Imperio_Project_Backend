package com.example.imperio.service;

import com.example.imperio.dto.RegionMasterCreateDto;

import java.util.List;

public interface RegionMasterService {
    RegionMasterCreateDto createRegionMaster(RegionMasterCreateDto regionMasterCreateDto);

    RegionMasterCreateDto getRegionMaster(String regionMasterId);

    List<RegionMasterCreateDto> getAllRegionMasterIds();

    RegionMasterCreateDto updateRegion(String regionMasterId, RegionMasterCreateDto updatedRegion);

    void deleteRegion(String regionMasterId);
}
